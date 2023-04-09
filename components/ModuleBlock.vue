<template>
<nuxt-link
  :to="localePath(sectionKey)"
>
  <section
    class="module-block"
  >
    <div class="has-text-centered">
      <img :src="useAsset(sectionKey + '.png')" />
    </div>
    <h2>
      {{ $t(`${sectionKey} header tagline`) }}
    </h2>
    <div class="module-description">
      {{ $t(`${sectionKey} ${feature1Key} title`) }}
    </div>
    <div class="module-description">
      {{ $t(`${sectionKey} ${feature2Key} title`) }}
    </div>
    <div class="module-description">
      {{ $t(`${sectionKey} ${feature3Key} title`) }}
    </div>
  </section>
</nuxt-link>
</template>

<script setup>
const props = defineProps({
  sectionKey: String,
  feature1Key: String,
  feature2Key: String,
  feature3Key: String
})

function useAsset(path) {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/images/illustrations/' + path]
}
</script>

<style lang="stylus" scoped>
</style>
