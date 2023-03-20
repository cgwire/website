<template>
<section class="section">
  <div class="tile">
    <div class="tile is-6 is-child content">
      <h2 class="solution-title">
        <span class="section-subtitle mt2">
          {{ $t(pageKey + ' header subtitle') }}
        </span>
        <span class="section-title">
          {{ $t(pageKey + ' header tagline') }}
        </span>
      </h2>
      <p>
        {{ $t(pageKey + ' header explaination') }}
      </p>
    </div>
    <div class="is-6 pl1">
      <img :src="useAsset('illustrations/' + pageKey + '.png')" alt="" />
    </div>
  </div>
</section>
</template>

<script setup>
const props = defineProps({
  pageKey: String,
  imagePath: String
})

function useAsset(path) {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/images/' + path]
}
</script>

<style lang="stylus" scoped>
</style>
