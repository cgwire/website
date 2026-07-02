import { ref, shallowRef, watch, onBeforeUnmount } from 'vue'
import { registerSharedScene, unregisterSharedScene, getTHREE } from './useSharedRenderer'

// Kept as module-level constants — previously read off an OrbitControls
// instance that was created solely to store these two numbers and never
// actually enabled/updated. With a shared renderer, per-scene OrbitControls
// don't make sense anyway (see note in buildScene), so these are just
// plain constants now.
const MIN_DISTANCE = 1.2
const MAX_DISTANCE = 4

/**
 * useImageScene
 *
 * Encapsulates a tilted, slowly-breathing Three.js "image plane" scene so
 * it can be reused across components without duplicating Three.js
 * setup/teardown logic.
 *
 * Designed to be called once PER image — e.g. from inside a v-for over a
 * list of screenshots. Each call gets its own Scene/camera/mesh/texture,
 * but rendering itself is done by a single shared WebGLRenderer (see
 * useSharedRenderer.js), per the Three.js manual's "multiple scenes, one
 * renderer" pattern (https://threejs.org/manual/#en/multiple-scenes).
 * That renderer draws onto one full-viewport canvas positioned over the
 * page; each instance's `containerRef` element just defines the
 * on-screen rectangle its scene gets rendered into (via scissor/viewport),
 * so there's nothing shared between instances except that renderer, the
 * ticker's rAF loop, and the browser's single WebGL context.
 *
 * Nuxt note: Three.js touches `window`/`document`/WebGL, none of which
 * exist during SSR. By default this composable initializes itself lazily
 * (see `lazy` option below) once its containerRef is mounted and near the
 * viewport, so you generally do NOT need to call init() yourself. If you
 * set `lazy: false`, call init() from a client-only lifecycle hook.
 *
 * @param {object} options
 * @param {import('vue').Ref<string>|string} options.src - image URL (can be a ref for reactivity)
 * @param {number} [options.tiltX]
 * @param {number} [options.tiltY]
 * @param {number} [options.baseDistance]
 * @param {number} [options.zoomSpeed]
 * @param {boolean} [options.lazy=true] - don't register with the shared
 *   renderer until the container scrolls near the viewport. Still worth
 *   doing even with a shared renderer/context: it avoids doing texture
 *   loads and per-frame work for scenes nobody is looking at yet.
 * @param {boolean} [options.disposeOnExit=false] - fully release this
 *   scene's GPU-side resources (mesh geometry/material, texture) and
 *   unregister from the shared render loop when the container scrolls far
 *   out of view, rebuilding on re-entry. Note this no longer tears down a
 *   WebGL *context* (there's only ever one, shared globally) — it frees
 *   this instance's textures/geometry, which is still worthwhile on pages
 *   with many large images. If false, the scene is just paused (resources
 *   stay alive, rendering stops) while off-screen.
 * @param {string} [options.rootMargin='200px'] - IntersectionObserver
 *   rootMargin, controls how far ahead of scroll position scenes preload.
 */
export function useImageScene(options = {}) {
  const {
    src,
    tiltX = 0.35,
    tiltY = -0.22,
    baseDistance = 3.2,
    zoomSpeed = 0.4,
    lazy = true,
    disposeOnExit = false,
    rootMargin = '200px',
  } = options

  const containerRef = ref(null)
  // Vestigial: kept only so existing templates that render
  // `<canvas ref="canvasRef">` don't break. It's no longer bound to a
  // WebGLRenderer — all drawing happens on the single shared canvas — so
  // new usages can safely drop the <canvas> element and rely on
  // containerRef alone for layout/sizing.
  const canvasRef = ref(null)
  const loading = ref(true)
  const error = ref(null)

  // Three.js objects don't need to be deeply reactive — shallowRef avoids
  // Vue proxying them (which is wasted work and can break Three internals).
  const scene = shallowRef(null)
  const camera = shallowRef(null)
  const mesh = shallowRef(null)
  const texture = shallowRef(null)

  let THREE = null
  let resizeObserver = null
  let intersectionObserver = null
  let clock = null
  let disposed = false
  let built = false // true once buildScene() has run
  let viewDir = null
  let phase = 0
  let slot = null // this instance's registration with the shared renderer

  async function loadThree() {
    if (THREE) return
    // Backed by the same dynamic import() cache as useSharedRenderer, so
    // this resolves to the same module instance rather than re-fetching.
    THREE = await getTHREE()
  }

  function buildScene() {
    const container = containerRef.value
    if (!container) return

    const { clientWidth: width, clientHeight: height } = container
    if (width === 0 || height === 0) return

    scene.value = new THREE.Scene()

    viewDir = new THREE.Vector3(tiltX, tiltY, 1).normalize()

    camera.value = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.value.position.copy(viewDir).multiplyScalar(baseDistance)
    camera.value.lookAt(0, 0, 0)

    scene.value.add(new THREE.AmbientLight(0xffffff, 0.7))
    const key = new THREE.DirectionalLight(0xffffff, 0.8)
    key.position.set(2, 2, 3)
    scene.value.add(key)

    // No OrbitControls here: this scene is rendered into a scissored
    // rectangle of a full-viewport canvas that has pointer-events:none,
    // so there's no sane DOM element for per-scene pointer listeners to
    // attach to anyway. The gentle zoom motion below is driven manually.

    clock = new THREE.Clock()
    built = true
  }

  function loadTexture(url) {
    if (!url || !THREE) return
    loading.value = true
    error.value = null

    const loader = new THREE.TextureLoader()
    loader.setCrossOrigin('anonymous')

    loader.load(
      url,
      (loadedTexture) => {
        if (disposed) {
          loadedTexture.dispose()
          return
        }
        texture.value = loadedTexture
        texture.value.colorSpace = THREE.SRGBColorSpace

        const { width: imgW, height: imgH } = texture.value.image
        const aspect = imgW && imgH ? imgW / imgH : 1

        const planeHeight = 2
        const planeWidth = planeHeight * aspect
        const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight)
        const material = new THREE.MeshBasicMaterial({
          map: texture.value,
          transparent: true,
          premultipliedAlpha: false,
          depthWrite: false,
          depthTest: false,
        })

        if (mesh.value) {
          scene.value.remove(mesh.value)
          mesh.value.geometry.dispose()
          mesh.value.material.dispose()
        }

        mesh.value = new THREE.Mesh(geometry, material)
        scene.value.add(mesh.value)

        loading.value = false
      },
      undefined,
      (err) => {
        console.error('useImageScene: failed to load texture', err)
        error.value = 'Could not load image.'
        loading.value = false
      }
    )
  }

  // Passed to the shared renderer as this slot's `beforeRender` hook —
  // called once per frame, right before the shared renderer draws this
  // scene into its rectangle. Only touches the camera; the actual
  // renderer.render() call lives in useSharedRenderer.js.
  function updateCamera() {
    if (disposed || !built || !clock) return

    const delta = clock.getDelta()
    phase += delta * zoomSpeed
    const t = (Math.sin(phase) + 1) / 2
    const distance = THREE.MathUtils.lerp(MIN_DISTANCE, MAX_DISTANCE, t)
    camera.value.position.copy(viewDir).multiplyScalar(distance)
    camera.value.lookAt(0, 0, 0)
  }

  // The shared renderer recomputes each scene's on-screen rect (and thus
  // viewport size) every frame from containerRef directly, so this only
  // needs to keep the camera's aspect ratio in sync when the container's
  // size changes (e.g. a responsive layout reflow, not just a window
  // resize).
  function handleResize() {
    if (!camera.value || !containerRef.value) return
    const { clientWidth: width, clientHeight: height } = containerRef.value
    if (width === 0 || height === 0) return
    camera.value.aspect = width / height
    camera.value.updateProjectionMatrix()
  }

  /**
   * Build the scene, load the texture, and register with the shared
   * render loop. Safe to call multiple times (e.g. after teardownGL()) —
   * it rebuilds from scratch. You don't need to call this yourself unless
   * you passed `lazy: false`.
   */
  async function init() {
    await loadThree()
    if (disposed) return

    buildScene()
    if (!built) return

    loadTexture(typeof src === 'object' && 'value' in src ? src.value : src)

    slot = { containerRef, scene: scene.value, camera: camera.value, beforeRender: updateCamera }
    await registerSharedScene(slot)

    if (!resizeObserver) {
      resizeObserver = new ResizeObserver(handleResize)
    }
    resizeObserver.observe(containerRef.value)
  }

  /** Stop rendering (and camera animation) without freeing GPU resources. */
  function pause() {
    if (slot) unregisterSharedScene(slot)
  }

  /** Resume rendering after pause(), reusing this instance's existing scene. */
  function resume() {
    if (built && slot) registerSharedScene(slot)
  }

  /**
   * Release this scene's GPU-side resources (mesh geometry/material,
   * texture) and unregister from the shared render loop. Call init()
   * again to rebuild. Used internally when `disposeOnExit: true`.
   */
  function teardownGL() {
    if (!built) return

    if (slot) {
      unregisterSharedScene(slot)
      slot = null
    }
    resizeObserver?.disconnect()

    mesh.value?.geometry.dispose()
    mesh.value?.material.dispose()
    texture.value?.dispose()

    scene.value = null
    camera.value = null
    mesh.value = null
    texture.value = null

    built = false
    loading.value = true
  }

  /** Full teardown on unmount — never rebuilds after this. */
  function dispose() {
    disposed = true
    intersectionObserver?.disconnect()
    teardownGL()
  }

  // React to a reactive `src` (e.g. a prop passed in as a ref).
  if (src && typeof src === 'object' && 'value' in src) {
    watch(src, (newSrc) => {
      if (newSrc && THREE && built) loadTexture(newSrc)
    })
  }

  // Lazily build/pause/teardown based on viewport visibility. This is what
  // makes it safe to drop many <ImageScene> instances on one landing page:
  // below-the-fold scenes don't do texture loads or per-frame work until
  // they're about to be scrolled into view.
  watch(containerRef, (el) => {
    if (!el) return

    if (!lazy) {
      init()
      return
    }

    intersectionObserver = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0]?.isIntersecting
        if (isVisible) {
          if (!built) init()
          else resume()
        } else if (built) {
          if (disposeOnExit) teardownGL()
          else pause()
        }
      },
      { rootMargin }
    )
    intersectionObserver.observe(el)
  })

  onBeforeUnmount(dispose)

  return {
    containerRef,
    canvasRef,
    loading,
    error,
    init,
    pause,
    resume,
    dispose,
  }
}