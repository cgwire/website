<template>
  <div class="converter-wrapper">
    <div class="converter-card">
      <!-- Header -->
      <div class="header">
        <div class="badge">Browser-native · No upload</div>

        <h1 class="title">MP4 <span class="arrow">→</span> WebM</h1>
        <p class="subtitle">
          Client-side conversion powered by mediabunny & WebCodecs
        </p>
      </div>

      <!-- Drop Zone -->
      <div
        class="drop-zone"
        :class="{
          'drop-zone--active': isDragging,
          'drop-zone--has-file': selectedFile && status === 'idle',
          'drop-zone--converting': status === 'converting',
          'drop-zone--done': status === 'done',
          'drop-zone--error': status === 'error'
        }"
        @dragover.prevent="isDragging = true"
        @dragleave.prevent="isDragging = false"
        @drop.prevent="onDrop"
        @click="status !== 'converting' && $refs.fileInput.click()"
      >
        <input
          ref="fileInput"
          type="file"
          accept="video/mp4,.mp4"
          style="display: none"
          @change="onFileSelected"
        />

        <!-- Idle / no file -->
        <template v-if="!selectedFile && status === 'idle'">
          <div class="drop-icon">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6"
                y="10"
                width="36"
                height="28"
                rx="3"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-dasharray="5 3"
              />
              <path
                d="M24 18v12M18 24l6-6 6 6"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p class="drop-title">Drop your MP4 here</p>
          <p class="drop-hint">or click to browse</p>
        </template>

        <!-- File selected, ready -->
        <template v-else-if="selectedFile && status === 'idle'">
          <div class="file-info">
            <div class="file-icon">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8"
                  y="4"
                  width="26"
                  height="36"
                  rx="3"
                  fill="currentColor"
                  fill-opacity="0.08"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M28 4l10 10H28V4z"
                  fill="currentColor"
                  fill-opacity="0.2"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <rect
                  x="13"
                  y="24"
                  width="12"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="13"
                  y="29"
                  width="18"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div class="file-meta">
              <span class="file-name">{{ selectedFile.name }}</span>
              <span class="file-size">{{ formatSize(selectedFile.size) }}</span>
            </div>
            <button class="remove-btn" @click.stop="resetState">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p class="drop-hint" style="margin-top: 8px">Click to change file</p>
        </template>

        <!-- Converting -->
        <template v-else-if="status === 'converting'">
          <div class="converting-state">
            <div class="spinner-ring">
              <svg viewBox="0 0 56 56">
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="#e2e8f0"
                  stroke-width="4"
                  fill="none"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="url(#grad)"
                  stroke-width="4"
                  fill="none"
                  stroke-linecap="round"
                  :stroke-dasharray="`${(2 * Math.PI * 24 * progress) / 100} ${2 * Math.PI * 24 * (1 - progress / 100)}`"
                  stroke-dashoffset="37.7"
                  style="transition: stroke-dasharray 0.3s ease"
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#6366f1" />
                    <stop offset="100%" stop-color="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <span class="progress-pct">{{ Math.round(progress) }}%</span>
            </div>
            <p class="converting-label">Converting…</p>
            <p class="converting-sub">{{ selectedFile?.name }}</p>
          </div>
        </template>

        <!-- Done -->
        <template v-else-if="status === 'done'">
          <div class="done-state">
            <div class="check-circle">
              <svg viewBox="0 0 48 48" fill="none">
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="#22c55e"
                  fill-opacity="0.12"
                  stroke="#22c55e"
                  stroke-width="2.5"
                />
                <path
                  d="M14 24l8 8 12-14"
                  stroke="#22c55e"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="done-label">Conversion complete!</p>
            <p class="done-sub">
              {{ outputName }} · {{ formatSize(outputSize) }}
            </p>
          </div>
        </template>

        <!-- Error -->
        <template v-else-if="status === 'error'">
          <div class="error-state">
            <div class="error-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="#ef4444"
                  fill-opacity="0.10"
                  stroke="#ef4444"
                  stroke-width="2.5"
                />
                <path
                  d="M24 15v10M24 31v2"
                  stroke="#ef4444"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p class="error-label">Conversion failed</p>
            <p class="error-sub">{{ errorMessage }}</p>
          </div>
        </template>
      </div>

      <!-- Actions -->
      <div class="actions">
        <button
          v-if="status === 'idle' && selectedFile"
          class="btn btn--primary"
          @click="convert"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            style="width: 18px; height: 18px"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
          Convert to WebM
        </button>

        <template v-if="status === 'done'">
          <button class="btn btn--primary" @click="downloadOutput">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              style="width: 18px; height: 18px"
            >
              <path
                fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Download WebM
          </button>
          <button class="btn btn--ghost" @click="resetState">
            Convert another
          </button>
        </template>

        <template v-if="status === 'error'">
          <button class="btn btn--primary" @click="resetState">
            Try again
          </button>
        </template>
      </div>

      <!-- Footer note -->
      <p class="footer-note">
        All processing happens locally in your browser — your file never leaves
        your device.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  Input,
  Output,
  Conversion,
  ALL_FORMATS,
  BlobSource,
  WebMOutputFormat,
  BufferTarget,
  MP4
} from 'mediabunny'

const props = defineProps({
  inputFormat: String,
  outputFormat: String
})

// ── State ──────────────────────────────────────────────────────────────────
const fileInput = ref(null)
const selectedFile = ref(null)
const status = ref('idle') // idle | converting | done | error
const progress = ref(0)
const outputBlob = ref(null)
const outputSize = ref(0)
const errorMessage = ref('')
const isDragging = ref(false)

const outputName = computed(() =>
  selectedFile.value
    ? selectedFile.value.name.replace(/\.mp4$/i, '.webm')
    : 'output.webm'
)

// ── Helpers ────────────────────────────────────────────────────────────────
function formatSize(bytes) {
  if (!bytes) return '0 B'
  const units = ['B', 'KB', 'MB', 'GB']
  let i = 0
  let val = bytes
  while (val >= 1024 && i < units.length - 1) {
    val /= 1024
    i++
  }
  return `${val.toFixed(i > 0 ? 1 : 0)} ${units[i]}`
}

function resetState() {
  selectedFile.value = null
  status.value = 'idle'
  progress.value = 0
  outputBlob.value = null
  outputSize.value = 0
  errorMessage.value = ''
  isDragging.value = false
}

// ── File handling ──────────────────────────────────────────────────────────
function onFileSelected(e) {
  const file = e.target.files?.[0]
  if (file) setFile(file)
  e.target.value = '' // allow re-selecting same file
}

function onDrop(e) {
  isDragging.value = false
  const file = e.dataTransfer.files?.[0]
  if (file && (file.type === 'video/mp4' || file.name.endsWith('.mp4'))) {
    setFile(file)
  }
}

function setFile(file) {
  resetState()
  selectedFile.value = file
}

// ── Conversion ─────────────────────────────────────────────────────────────
async function convert() {
  if (!selectedFile.value) return

  status.value = 'converting'
  progress.value = 0

  try {
    const input = new Input({
      source: new BlobSource(selectedFile.value),
      formats: [MP4]
    })

    const output = new Output({
      format: new WebMOutputFormat({
        video: {
          codec: 'vp9',
          crf: 0, // Quality (0=best, 63=worst). Default is often low compression
          bitrate: 500_000 // e.g. 500kbps — omit if using CRF
        },
        audio: {
          codec: 'opus',
          bitrate: 96_000 // 96kbps
        }
      }),
      target: new BufferTarget()
    })

    const conversion = await Conversion.init({ input, output })

    conversion.onProgress = p => {
      progress.value = (p ?? 0) * 100
    }

    await conversion.execute()

    const buffer = output.target.buffer
    outputBlob.value = new Blob([buffer], { type: 'video/webm' })
    outputSize.value = buffer.byteLength
    progress.value = 100
    status.value = 'done'
  } catch (err) {
    console.error('Conversion error:', err)
    errorMessage.value = err?.message ?? 'An unexpected error occurred.'
    status.value = 'error'
  }
}

// ── Download ───────────────────────────────────────────────────────────────
function downloadOutput() {
  if (!outputBlob.value) return
  const url = URL.createObjectURL(outputBlob.value)
  const a = document.createElement('a')
  a.href = url
  a.download = outputName.value
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
/* ── Layout ──────────────────────────────────────────────────────────────── */
.converter-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f13;
  font-family: 'DM Sans', 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
}

.converter-card {
  width: 100%;
  max-width: 480px;
  background: #18181f;
  border: 1px solid #2a2a38;
  border-radius: 20px;
  padding: 36px 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ── Header ──────────────────────────────────────────────────────────────── */
.header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}

.badge {
  display: inline-block;
  background: rgba(99, 102, 241, 0.12);
  color: #818cf8;
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 999px;
  padding: 4px 14px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1.1;
}

.arrow {
  color: #6366f1;
}

.subtitle {
  font-size: 13px;
  color: #64748b;
  margin: 0;
}

/* ── Drop Zone ───────────────────────────────────────────────────────────── */
.drop-zone {
  border: 2px dashed #2a2a38;
  border-radius: 14px;
  padding: 36px 24px;
  text-align: center;
  cursor: pointer;
  transition:
    border-color 0.2s,
    background 0.2s;
  background: #141419;
  position: relative;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.drop-zone--active {
  border-color: #6366f1;
  background: rgba(99, 102, 241, 0.05);
}

.drop-zone--has-file {
  border-style: solid;
  border-color: #2a2a38;
}

.drop-zone--converting {
  cursor: default;
  border-color: #2a2a38;
}

.drop-zone--done {
  border-style: solid;
  border-color: #22c55e40;
  background: rgba(34, 197, 94, 0.04);
  cursor: default;
}

.drop-zone--error {
  border-color: #ef444440;
  background: rgba(239, 68, 68, 0.04);
  cursor: default;
}

/* Idle icons & text */
.drop-icon svg {
  width: 48px;
  height: 48px;
  color: #3a3a50;
}

.drop-title {
  font-size: 15px;
  font-weight: 600;
  color: #94a3b8;
  margin: 0;
}

.drop-hint {
  font-size: 12px;
  color: #475569;
  margin: 0;
}

/* File info row */
.file-info {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #1e1e28;
  border: 1px solid #2a2a38;
  border-radius: 10px;
  padding: 12px 14px;
  width: 100%;
}

.file-icon svg {
  width: 36px;
  height: 36px;
  color: #6366f1;
}

.file-meta {
  flex: 1;
  text-align: left;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.file-name {
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-size {
  font-size: 11px;
  color: #64748b;
}

.remove-btn {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #475569;
  display: flex;
  transition: color 0.15s;
  border-radius: 6px;
}

.remove-btn:hover {
  color: #ef4444;
}

.remove-btn svg {
  width: 16px;
  height: 16px;
}

/* Converting */
.converting-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.spinner-ring {
  position: relative;
  width: 72px;
  height: 72px;
}

.spinner-ring svg {
  width: 72px;
  height: 72px;
  animation: rotate 2s linear infinite;
}

.progress-pct {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #a5b4fc;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.converting-label {
  font-size: 14px;
  font-weight: 600;
  color: #94a3b8;
  margin: 0;
}

.converting-sub {
  font-size: 11px;
  color: #475569;
  margin: 0;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Done */
.done-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.check-circle svg {
  width: 56px;
  height: 56px;
}

.done-label {
  font-size: 15px;
  font-weight: 700;
  color: #4ade80;
  margin: 0;
}

.done-sub {
  font-size: 12px;
  color: #64748b;
  margin: 0;
}

/* Error */
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.error-icon svg {
  width: 56px;
  height: 56px;
}

.error-label {
  font-size: 15px;
  font-weight: 700;
  color: #f87171;
  margin: 0;
}

.error-sub {
  font-size: 12px;
  color: #64748b;
  margin: 0;
  max-width: 320px;
}

/* ── Buttons ─────────────────────────────────────────────────────────────── */
.actions {
  display: flex;
  gap: 10px;
}

.btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition:
    opacity 0.15s,
    transform 0.1s;
}

.btn:active {
  transform: scale(0.97);
}

.btn--primary {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: #fff;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
}

.btn--primary:hover {
  opacity: 0.9;
}

.btn--ghost {
  background: #1e1e28;
  color: #94a3b8;
  border: 1px solid #2a2a38;
}

.btn--ghost:hover {
  background: #232330;
  color: #e2e8f0;
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
.footer-note {
  font-size: 11px;
  color: #334155;
  text-align: center;
  margin: 0;
}
</style>
