<template>
  <div class="video-wrapper">
    <iframe
      ref="playerRef"
      class="video-iframe"
      :src="videoUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>

    <button
      class="play-pause-overlay"
      type="button"
      :aria-label="isPlaying ? 'Pause video' : 'Play video'"
      @click="togglePlay"
    >
      <svg v-if="!isPlaying" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      <svg v-else viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
    </button>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  slug: String
})

const { locale } = useI18n()
const slug = computed(() => props.slug)

const { queryVideoTestimonial } = useVideoTestimonial(slug, locale)

const { data: customerStory } = await useAsyncData(
  `video-testimonial-${locale.value}-${slug.value}`,
  queryVideoTestimonial,
  { watch: [locale, slug] }
)

const playerRef = ref(null)
const isPlaying = ref(false)

// Build the embed URL with controls hidden and the JS API enabled
const videoUrl = computed(() => {
  const rawUrl = customerStory.value?.meta?.url
  if (!rawUrl) return ''
  const url = new URL(rawUrl)
  url.searchParams.set('controls', '0')
  url.searchParams.set('enablejsapi', '1')
  url.searchParams.set('modestbranding', '1')
  url.searchParams.set('playsinline', '1')
  url.searchParams.set('rel', '0')
  if (typeof window !== 'undefined') {
    // required for the postMessage API to work reliably
    url.searchParams.set('origin', window.location.origin)
  }
  return url.toString()
})

function postCommand(func) {
  playerRef.value?.contentWindow?.postMessage(
    JSON.stringify({ event: 'command', func, args: [] }),
    '*'
  )
}

function togglePlay() {
  postCommand(isPlaying.value ? 'pauseVideo' : 'playVideo')
  isPlaying.value = !isPlaying.value
}

// Keep the button state in sync with actual player state
function handleMessage(event) {
  if (typeof event.data !== 'string') return
  try {
    const data = JSON.parse(event.data)
    if (data.event === 'infoDelivery' && typeof data.info?.playerState === 'number') {
      // 1 = playing, 2 = paused, 0 = ended
      if (data.info.playerState === 1) isPlaying.value = true
      else if (data.info.playerState === 2 || data.info.playerState === 0) isPlaying.value = false
    }
  } catch {
    // ignore non-JSON messages from other sources
  }
}

onMounted(() => window.addEventListener('message', handleMessage))
onBeforeUnmount(() => window.removeEventListener('message', handleMessage))
</script>

<style scoped>
.video-wrapper {
  position: relative;
  width: 720px;
  height: 1280px;
  max-width: 100%;
  overflow: hidden;
  background: #000;
}

.video-iframe {
  width: 100%;
  height: 100%;
  display: block;
}

.play-pause-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.play-pause-overlay svg {
  width: 72px;
  height: 72px;
  fill: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
}
</style>