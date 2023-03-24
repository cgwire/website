<template>
<section
  :class="{
    'block-colored': colored,
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
</template>

<script setup>
const props = defineProps({
  sectionKey: String,
  featureKey: String,
  colored: {
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
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/images/screenshots/' + path]
}
</script>

<style lang="stylus" scoped>
</style>
