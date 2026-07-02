import { useThreeTicker } from './useThreeTicker'

/**
 * useSharedRenderer
 *
 * Per the Three.js manual's guidance on pages with many "scenes"
 * (https://threejs.org/manual/#en/multiple-scenes), the recommended
 * pattern is: ONE WebGLRenderer + ONE <canvas>, shared by every logical
 * scene on the page. Browsers cap concurrent WebGL contexts (commonly
 * ~8-16), and each renderer/context carries its own GPU memory and driver
 * overhead — creating one per <ImageScene> (as the old implementation
 * did) doesn't scale to a page with a dozen+ of them.
 *
 * This module owns that single renderer as a lazy singleton:
 *  - The renderer/canvas are created the first time any scene registers,
 *    and disposed once the last scene unregisters. A page that never
 *    mounts an ImageScene never pays for a WebGL context at all.
 *  - The shared <canvas> is `position: fixed`, sized to the viewport, and
 *    `pointer-events: none` — it draws on top of the page but never
 *    intercepts clicks/drags, so it's invisible to the rest of the page's
 *    interaction model. Everywhere no mesh is drawn, the canvas is fully
 *    transparent (alpha renderer + transparent clear color), so normal
 *    page content behind/around it is unaffected.
 *  - Each caller (see useImageScene.js) registers a "slot": its own
 *    {containerRef, scene, camera, beforeRender}. Every tick, this module
 *    walks the registered slots, reads each slot's on-screen rectangle
 *    from containerRef.getBoundingClientRect(), and renders that slot's
 *    scene into that rectangle via renderer.setViewport/setScissor. From
 *    the outside it still looks like N independent canvases; under the
 *    hood it's one GL context doing N scissored draws per frame.
 *
 * Individual scenes (mesh, geometry, material, texture, camera, Scene)
 * are still owned per-instance by useImageScene — those are cheap. Only
 * the expensive renderer/context is shared.
 */

let THREE = null
let renderer = null
let canvasEl = null
let resizeHandler = null
let ticker = null
let tickerAttached = false
const slots = new Set()

async function loadThree() {
  if (THREE) return THREE
  THREE = await import('three')
  return THREE
}

function createCanvas() {
  const el = document.createElement('canvas')
  Object.assign(el.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
  })
  document.body.appendChild(el)
  return el
}

function resizeRenderer() {
  if (!renderer) return
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight, false)
}

async function ensureRenderer() {
  if (renderer) return renderer
  await loadThree()
  // Guard against a second concurrent call building a second renderer
  // while the first await above was in flight.
  if (renderer) return renderer

  canvasEl = createCanvas()
  renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true, alpha: true })
  renderer.setClearColor(0x000000, 0)
  resizeRenderer()

  resizeHandler = resizeRenderer
  window.addEventListener('resize', resizeHandler)

  return renderer
}

function renderFrame() {
  if (!renderer) return

  // Wipe the whole shared canvas once per frame. Each slot below only
  // clears/draws inside its own scissor rect, so a scene that unmounts
  // (or shrinks) doesn't leave stale pixels behind.
  renderer.setScissorTest(false)
  renderer.clear()
  renderer.setScissorTest(true)

  const vw = window.innerWidth
  const vh = window.innerHeight

  for (const slot of slots) {
    const el = slot.containerRef?.value
    if (!el || !slot.scene || !slot.camera) continue

    const rect = el.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) continue
    // Cheap offscreen culling. useImageScene's own IntersectionObserver
    // already pauses/tears down scenes that are far off-screen; this
    // just skips a render call for anything transiently past the edge.
    if (rect.bottom < 0 || rect.top > vh || rect.right < 0 || rect.left > vw) continue

    slot.beforeRender?.()

    const x = rect.left
    const y = vh - rect.bottom // flip to WebGL's bottom-left-origin viewport space
    renderer.setViewport(x, y, rect.width, rect.height)
    renderer.setScissor(x, y, rect.width, rect.height)
    renderer.render(slot.scene, slot.camera)
  }
}

/**
 * Register a scene "slot" with the shared renderer. Builds the shared
 * renderer/canvas on first call. Safe to call again to re-register a slot
 * previously passed to unregisterSharedScene (e.g. on pause/resume).
 * @param {{ containerRef: import('vue').Ref, scene: any, camera: any, beforeRender?: () => void }} slot
 */
export async function registerSharedScene(slot) {
  await ensureRenderer()
  slots.add(slot)

  if (!tickerAttached) {
    ticker = ticker ?? useThreeTicker()
    ticker.add(renderFrame)
    tickerAttached = true
  }
}

/**
 * Unregister a slot. Once the last slot anywhere unregisters, the shared
 * renderer/canvas/context are fully disposed and the resize listener is
 * removed — the next registerSharedScene() call rebuilds from scratch.
 */
export function unregisterSharedScene(slot) {
  slots.delete(slot)
  if (slots.size > 0) return

  if (ticker && tickerAttached) {
    ticker.remove(renderFrame)
    tickerAttached = false
  }

  renderer?.dispose()
  renderer = null

  canvasEl?.remove()
  canvasEl = null

  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
    resizeHandler = null
  }
}

/** Access to the shared (cached) THREE module, for callers that need it. */
export async function getTHREE() {
  await loadThree()
  return THREE
}