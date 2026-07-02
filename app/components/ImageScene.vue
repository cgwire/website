<template>
  <div ref="containerRef" class="image-scene" :class="{ 'is-loading': loading }">
    <canvas ref="canvasRef" class="image-scene__canvas" />

    <ClientOnly>
      <div v-if="loading" class="image-scene__status">
        Loading image…
      </div>
      <div v-else-if="error" class="image-scene__status image-scene__status--error">
        {{ error }}
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { toRef } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  // Background color of the 3D space (currently just informational — the
  // renderer itself stays transparent so the page background shows through)
  background: {
    type: String,
    default: '#0b0b0f',
  },
  tiltX: {
    type: Number,
    default: 0.35,
  },
  tiltY: {
    type: Number,
    default: -0.22,
  },
  baseDistance: {
    type: Number,
    default: 3.2,
  },
  zoomAmplitude: {
    type: Number,
    default: 10,
  },
  zoomSpeed: {
    type: Number,
    default: 0.4,
  },
})

const { containerRef, canvasRef, loading, error, init } = useImageScene({
  src: toRef(props, 'src'),
  tiltX: props.tiltX,
  tiltY: props.tiltY,
  baseDistance: props.baseDistance,
  zoomAmplitude: props.zoomAmplitude,
  zoomSpeed: props.zoomSpeed,
})

// onMounted never runs during SSR, but guarding with import.meta.client
// makes the client-only intent explicit and protects against any future
// refactor (e.g. moving this call into a shared hook) that might not
// preserve that guarantee.
onMounted(() => {
  if (import.meta.client) init()
})
</script>

<style scoped>
.image-scene {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 320px;
  overflow: hidden;
  border-radius: 8px;
}

.image-scene__canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.image-scene__status {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d8d8de;
  font: 500 14px/1.4 system-ui, sans-serif;
  letter-spacing: 0.02em;
  pointer-events: none;
}

.image-scene__status--error {
  color: #ff8080;
}
</style>