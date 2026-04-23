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
/* ==========================================================================
   VARIABLES (CGWire-inspired)
   ========================================================================== */
:root {
  --cg-bg: #f4f8ff;
  --cg-surface: #ffffff;
  --cg-border: #e5e5e5;
  --cg-text: #54656f;
  --cg-text-light: #8a9aa5;

  --cg-primary: #38c172;
  --cg-primary-hover: #2fa360;
  --cg-primary-soft: rgba(56, 193, 114, 0.1);

  --cg-danger-bg: #fff5f5;
  --cg-danger-border: #ffcccc;
  --cg-danger-text: #cc4444;

  --cg-radius: 12px;
  --cg-radius-pill: 999px;

  --cg-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  --cg-shadow-soft: 0 2px 6px rgba(0, 0, 0, 0.05);
}

/* ==========================================================================
   BASE
   ========================================================================== */
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

  background: var(--cg-bg);
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  color: var(--cg-text);

  overflow: hidden;
  border-radius: var(--cg-radius);
}

/* ==========================================================================
   CANVAS
   ========================================================================== */
.three-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* ==========================================================================
   UPLOAD ZONE
   ========================================================================== */
.upload-zone {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;
  background: var(--cg-bg);

  transition: background 0.2s;
}

.upload-zone.dragging {
  background: #eafaf1;
}

.upload-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  padding: 40px;

  border: 2px dashed var(--cg-primary);
  border-radius: var(--cg-radius);

  background: var(--cg-surface);
  box-shadow: var(--cg-shadow-soft);

  text-align: center;
}

.icon svg {
  width: 48px;
  height: 48px;
  color: var(--cg-primary);
}

.label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--cg-text);
}

.label span {
  color: var(--cg-primary);
}

.sublabel {
  font-size: 0.85rem;
  color: var(--cg-text-light);
}

/* ==========================================================================
   BUTTONS
   ========================================================================== */
.browse-btn,
.swap-btn {
  padding: 0.6em 1.4em;

  background: var(--cg-primary);
  color: white;

  border: 1px solid var(--cg-primary);
  border-radius: var(--cg-radius-pill);

  cursor: pointer;

  font-size: 0.85rem;
  font-weight: 600;

  transition: all 0.15s ease;
}

.browse-btn:hover,
.swap-btn:hover {
  background: var(--cg-primary-hover);
  border-color: var(--cg-primary-hover);
}

.reset-btn {
  padding: 0.5em 1.2em;

  background: white;
  color: var(--cg-primary);

  border: 1px solid var(--cg-primary);
  border-radius: var(--cg-radius-pill);

  cursor: pointer;
  font-size: 0.8rem;

  transition: all 0.15s ease;
}

.reset-btn:hover {
  background: var(--cg-primary-soft);
}

/* ==========================================================================
   CONTROLS BAR
   ========================================================================== */
.controls-bar {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 8px 14px;

  background: var(--cg-surface);
  border: 1px solid var(--cg-border);
  border-radius: var(--cg-radius-pill);

  box-shadow: var(--cg-shadow);

  z-index: 10;
}

.filename {
  font-size: 0.8rem;
  color: var(--cg-primary);

  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ==========================================================================
   LOADING OVERLAY
   ========================================================================== */
.loading-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background: rgba(255, 255, 255, 0.7);

  z-index: 20;

  font-size: 0.85rem;
  color: var(--cg-text-light);
}

.spinner {
  width: 30px;
  height: 30px;

  border: 2px solid var(--cg-border);
  border-top-color: var(--cg-primary);

  border-radius: 50%;

  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ==========================================================================
   ERROR TOAST
   ========================================================================== */
.error-toast {
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);

  padding: 10px 18px;

  background: var(--cg-danger-bg);
  border: 1px solid var(--cg-danger-border);

  color: var(--cg-danger-text);

  border-radius: 8px;

  font-size: 0.85rem;

  z-index: 30;
}

/* ==========================================================================
   TRANSITIONS
   ========================================================================== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(12px);
}
</style>
