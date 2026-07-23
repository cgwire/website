<template>
  <div class="first-wave">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 40 1440 160"
      v-if="feature.colored"
    >
      <path :fill="topWaveColor" fill-opacity="1" :d="topPath"></path>
    </svg>
  </div>
  <section
    :class="{
      'block-colored': feature.colored,
      gradient: feature.gradient === true,
      [`gradient-${gradientStep}`]: gradientStep,
      block: !feature.colored,
      'block-last': last && !feature.colored
    }"
  >
    <section class="section">
      <div
        :class="{
          tile: true,
          'flex-aic': true,
          content: !feature.reverted,
          'content-reverse': feature.reverted
        }"
      >
        <div class="tile is-5 is-child content" data-aos="fade-up">
          <h2>
            <span class="section-subtitle">
              {{ feature.subtitle }}
            </span>
            <span class="section-title">
              {{ feature.title }}
            </span>
          </h2>
          <p>
            {{ feature.content }}
          </p>
        </div>
        <div
          class="tile is-7 is-child content-image has-text-centered"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <NuxtImg
            :class="{ screenshot: feature.shadow }"
            :src="'/images/screenshots/' + feature.image"
            :alt="feature.title"
            format="webp"
          />
        </div>
      </div>
    </section>
  </section>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 40 1440 160"
    :class="{ 'wave-last': last }"
    v-if="feature.colored"
  >
    <path :fill="bottomWaveColor" fill-opacity="1" :d="bottomPath"></path>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  feature: Object,
  last: Boolean
})

const feature = props.feature
const last = props.last

// Open curves, closed into a filled shape below (top wave) or above (bottom
// wave). Consecutive blocks share a curve: the wave closing block N and the one
// opening block N+1 are the same shape, so the white band between them keeps a
// constant thickness and the two nest however close they get.
const CURVES = [
  'M0,84C110,116,210,176,360,192C520,208,740,150,960,104C1120,70,1280,48,1440,40',
  'M0,40C160,44,320,72,480,104C700,148,900,192,1120,196C1240,198,1340,168,1440,140',
  'M0,60C140,72,300,132,460,172C560,196,640,200,720,196C900,186,1160,104,1440,44',
  'M0,52C180,60,360,100,540,132C760,172,1020,200,1240,198C1310,197,1380,180,1440,164'
]

const waveIndex = computed(() => {
  const step = typeof feature.gradient === 'number' ? feature.gradient : 1
  return step - 1
})

const topPath = computed(
  () => CURVES[waveIndex.value % CURVES.length] + 'L1440,200L0,200Z'
)

const bottomPath = computed(
  () => CURVES[(waveIndex.value + 1) % CURVES.length] + 'L1440,40L0,40Z'
)

const gradientStep = computed(() => {
  if (typeof feature.gradient === 'number') return feature.gradient
  return null
})

const topWaveColor = computed(() => {
  if (gradientStep.value === 2) return '#F6F7FE'
  if (gradientStep.value === 3) return '#F7F7FE'
  return '#F4F8FF'
})

const bottomWaveColor = computed(() => {
  if (gradientStep.value === 1) return '#F6F7FE'
  if (gradientStep.value === 2) return '#F7F7FE'
  if (gradientStep.value === 3) return '#F9F6FD'
  if (feature.gradient === true) return '#F9F6FD'
  return '#F4F8FF'
})
</script>

<style lang="stylus" scoped>
.first-wave
  position relative
  top 10px

.block-colored.gradient
  background linear-gradient(0deg, rgba(249,246,253,1) 35%, rgba(244,248,255,1) 100%)

.block-colored.gradient-1
  background linear-gradient(0deg, #F6F7FE 0%, #F4F8FF 100%)

.block-colored.gradient-2
  background linear-gradient(0deg, #F7F7FE 0%, #F6F7FE 100%)

.block-colored.gradient-3
  background linear-gradient(0deg, #F9F6FD 0%, #F7F7FE 100%)

// The last block of the page needs air before whatever section follows. A plain
// block has no wave at all, a colored one has a wave cropped tight to its curve:
// neither leaves any slack, so both get an explicit bottom margin.
// Doubled class to outweigh the global "div.body .block { margin 0 }" rule.
.block.block-last
  margin-bottom 16rem

svg.wave-last
  margin-bottom 8rem

.screenshot
  border-radius 10px
</style>
