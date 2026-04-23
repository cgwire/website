<template>
  <div class="viewer-shell">
    <!-- Upload overlay -->
    <transition name="fade">
      <div
        v-if="!modelLoaded"
        class="upload-zone"
        :class="{ dragging }"
        @dragover.prevent="dragging = true"
        @dragleave.prevent="dragging = false"
        @drop.prevent="onDrop"
      >
        <div class="upload-inner">
          <div class="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                d="M12 16V8m0 0-3 3m3-3 3 3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 15v2a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <p class="label">
            Drop a <span>.glb</span> or <span>.gltf</span> file
          </p>
          <p class="sublabel">or</p>
          <label class="browse-btn">
            Browse file
            <input
              type="file"
              accept=".glb,.gltf"
              @change="onFileInput"
              hidden
            />
          </label>
        </div>
      </div>
    </transition>

    <!-- Three.js canvas -->
    <canvas ref="canvas" class="three-canvas" />

    <!-- Controls bar (shown once model is loaded) -->
    <transition name="slide-up">
      <div v-if="modelLoaded" class="controls-bar">
        <span class="filename">{{ filename }}</span>
        <button class="reset-btn" @click="resetCamera">Reset Camera</button>
        <label class="swap-btn">
          Load new file
          <input type="file" accept=".glb,.gltf" @change="onFileInput" hidden />
        </label>
      </div>
    </transition>

    <!-- Loading indicator -->
    <transition name="fade">
      <div v-if="loading" class="loading-overlay">
        <div class="spinner" />
        <p>Parsing model…</p>
      </div>
    </transition>

    <!-- Error toast -->
    <transition name="fade">
      <div v-if="error" class="error-toast">{{ error }}</div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// ── state ──────────────────────────────────────────────────────────────────
const canvas = ref(null)
const dragging = ref(false)
const loading = ref(false)
const modelLoaded = ref(false)
const filename = ref('')
const error = ref('')

// ── three.js internals ─────────────────────────────────────────────────────
let renderer, scene, camera, controls, animId
let currentModel = null

// ── lifecycle ──────────────────────────────────────────────────────────────
onMounted(() => {
  initThree()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animId)
  renderer?.dispose()
  window.removeEventListener('resize', onResize)
})

// ── three.js setup ─────────────────────────────────────────────────────────
function initThree() {
  const el = canvas.value

  renderer = new THREE.WebGLRenderer({
    canvas: el,
    antialias: true,
    alpha: true
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(el.clientWidth, el.clientHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.shadowMap.enabled = true

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0d0d12)

  // Grid
  const grid = new THREE.GridHelper(20, 40, 0x222233, 0x181824)
  scene.add(grid)

  // Lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambient)

  const key = new THREE.DirectionalLight(0xffffff, 1.2)
  key.position.set(5, 8, 5)
  key.castShadow = true
  scene.add(key)

  const fill = new THREE.DirectionalLight(0x8899ff, 0.4)
  fill.position.set(-4, 2, -4)
  scene.add(fill)

  // Camera
  camera = new THREE.PerspectiveCamera(
    50,
    el.clientWidth / el.clientHeight,
    0.01,
    1000
  )
  camera.position.set(3, 2, 5)

  // Controls
  controls = new OrbitControls(camera, el)
  controls.enableDamping = true
  controls.dampingFactor = 0.06
  controls.minDistance = 0.1
  controls.maxDistance = 200

  animate()
}

function animate() {
  animId = requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

function onResize() {
  const el = canvas.value
  if (!el) return
  camera.aspect = el.clientWidth / el.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(el.clientWidth, el.clientHeight)
}

// ── model loading ──────────────────────────────────────────────────────────
function loadFile(file) {
  if (!file) return
  const ext = file.name.split('.').pop().toLowerCase()
  if (!['glb', 'gltf'].includes(ext)) {
    showError('Only .glb and .gltf files are supported.')
    return
  }

  loading.value = true
  error.value = ''
  filename.value = file.name

  const url = URL.createObjectURL(file)

  new GLTFLoader().load(
    url,
    gltf => {
      URL.revokeObjectURL(url)

      // Remove previous model
      if (currentModel) scene.remove(currentModel)

      const model = gltf.scene
      currentModel = model

      // Center & scale
      const box = new THREE.Box3().setFromObject(model)
      const size = new THREE.Vector3()
      box.getSize(size)
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 3 / (maxDim || 1)
      model.scale.setScalar(scale)

      const center = new THREE.Vector3()
      box.getCenter(center).multiplyScalar(scale)
      model.position.sub(center)

      scene.add(model)
      resetCamera(maxDim * scale)

      loading.value = false
      modelLoaded.value = true
    },
    undefined,
    err => {
      URL.revokeObjectURL(url)
      loading.value = false
      showError('Failed to parse model: ' + err.message)
    }
  )
}

function resetCamera(span = 3) {
  const dist = span * 1.8
  camera.position.set(dist * 0.6, dist * 0.4, dist)
  camera.near = dist / 100
  camera.far = dist * 100
  camera.updateProjectionMatrix()
  controls.target.set(0, 0, 0)
  controls.update()
}

// ── event handlers ─────────────────────────────────────────────────────────
function onDrop(e) {
  dragging.value = false
  loadFile(e.dataTransfer.files[0])
}

function onFileInput(e) {
  loadFile(e.target.files[0])
  e.target.value = ''
}

function showError(msg) {
  error.value = msg
  setTimeout(() => {
    error.value = ''
  }, 4000)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Syne:wght@400;600&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.viewer-shell {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 480px;
  background: #0d0d12;
  font-family: 'Syne', sans-serif;
  overflow: hidden;
  border-radius: 12px;
}

/* ── canvas ── */
.three-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* ── upload zone ── */
.upload-zone {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: #0d0d12;
  transition: background 0.2s;
}

.upload-zone.dragging {
  background: #12122a;
}

.upload-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 48px;
  border: 1.5px dashed #2a2a44;
  border-radius: 16px;
  text-align: center;
  transition: border-color 0.2s;
}

.upload-zone.dragging .upload-inner {
  border-color: #6655ee;
}

.icon svg {
  width: 48px;
  height: 48px;
  color: #4a4a88;
}

.label {
  color: #aaa;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.label span {
  color: #8877ff;
  font-family: 'IBM Plex Mono', monospace;
}

.sublabel {
  color: #555;
  font-size: 0.8rem;
}

.browse-btn {
  display: inline-block;
  padding: 8px 20px;
  background: #1e1e38;
  color: #c8c0ff;
  border: 1px solid #3a3a66;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  transition:
    background 0.15s,
    border-color 0.15s;
}
.browse-btn:hover {
  background: #2a2a50;
  border-color: #6655ee;
}

/* ── controls bar ── */
.controls-bar {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(13, 13, 20, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid #2a2a44;
  border-radius: 40px;
  padding: 8px 16px;
  z-index: 10;
  white-space: nowrap;
}

.filename {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.78rem;
  color: #8877ff;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.reset-btn,
.swap-btn {
  padding: 5px 14px;
  border-radius: 20px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
}

.reset-btn {
  background: #1e1e38;
  color: #aaa;
  border: 1px solid #2a2a44;
}
.reset-btn:hover {
  background: #2a2a50;
  color: #fff;
}

.swap-btn {
  background: #2a1e55;
  color: #c8c0ff;
  border: 1px solid #6655ee;
  display: inline-block;
}
.swap-btn:hover {
  background: #3a2a70;
}

/* ── loading overlay ── */
.loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: rgba(13, 13, 18, 0.7);
  z-index: 20;
  color: #888;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  font-family: 'IBM Plex Mono', monospace;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 2px solid #222;
  border-top-color: #8877ff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ── error toast ── */
.error-toast {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: #2a0a0a;
  border: 1px solid #aa3333;
  color: #ff8888;
  padding: 10px 20px;
  border-radius: 8px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.8rem;
  z-index: 30;
  white-space: nowrap;
}

/* ── transitions ── */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    opacity 0.4s,
    transform 0.4s;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(16px);
}
</style>
