<template>
<nuxt-link
  class="module-block"
  :to="$localePath(sectionKey)"
>
  <section
  >
    <div class="has-text-centered">
      <img :src="useAsset(sectionKey + '.png')" />
    </div>
    <h2>
      {{ $t(`${sectionKey} header tagline`) }}
    </h2>
    <ul>
      <li class="module-description">
        {{ $t(`${sectionKey} ${feature1Key} title`) }}
      </li>
      <li class="module-description">
        {{ $t(`${sectionKey} ${feature2Key} title`) }}
      </li>
      <li class="module-description">
        {{ $t(`${sectionKey} ${feature3Key} title`) }}
      </li>
    </ul>
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
  const assets = import.meta.glob('~/assets/images/illustrations/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/images/illustrations/' + path]
}
</script>

<style lang="stylus" scoped>
ul
  margin-left 0em
  list-style none

ul li:before
  content '✓ '

.module-block h2
  margin-top 0.5em
  font-size 1.3rem
</style>
