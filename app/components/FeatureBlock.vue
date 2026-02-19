<template>
<div class="first-wave">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310" v-if="colored">
  <path fill="#f4f8ff" fill-opacity="1" d="M0,160L60,165.3C120,171,240,181,360,197.3C480,213,600,235,720,256C840,277,960,299,1080,288C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
</div>
<section
  :class="{
    'block-colored': colored,
    gradient,
    block: !colored
  }"
>
  <section class="section">
    <div
      :class="{
        tile: true,
        'flex-aic': true,
        content: !reverted,
        'content-reverse': reverted
      }"
    >
      <div
        class="tile is-5 is-child content"
        data-aos="fade-up"
      >
        <h2>
          <span class="section-subtitle">
            {{ $t(`${sectionKey} ${featureKey} subtitle`) }}
          </span>
          <span class="section-title">
            {{ $t(`${sectionKey} ${featureKey} title`) }}
          </span>
        </h2>
        <p>
          {{ $t(`${sectionKey} ${featureKey} content`) }}
        </p>
      </div>
      <div
        class="tile is-7 is-child content-image"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          :class="{ screenshot: shadow }"
          :src="useAsset(`kitsu-${featureKey}.png`)"
        />
      </div>
    </div>
  </section>
</section>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" v-if="colored">
  <path :fill="gradient ? '#F9F6FD' : '#f4f8ff'" fill-opacity="1"
  d="M0,32L80,58.7C160,85,320,139,480,138.7C640,139,800,85,960,90.7C1120,96,1280,160,1360,192L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
  </path>
</svg>
</template>

<script setup>
const props = defineProps({
  sectionKey: String,
  featureKey: String,
  colored: {
    type: Boolean,
    default: false
  },
  gradient: {
    type: Boolean,
    default: false
  },
  reverted: {
    type: Boolean,
    default: false
  },
  shadow: {
    type: Boolean,
    default: true
  },
})

function useAsset(path) {
  const assets = import.meta.glob('~/assets/images/screenshots/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/images/screenshots/' + path]
}
</script>

<style lang="stylus" scoped>
.first-wave
  position relative
  top 10px

.block-colored.gradient
  background linear-gradient(0deg, rgba(249,246,253,1) 35%, rgba(244,248,255,1) 100%)
</style>
