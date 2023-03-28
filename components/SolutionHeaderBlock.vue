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
        {{ $t(pageKey + ' header explanation') }}
      </p>
    </div>
    <div class="is-6">
      <video
        :src="useAsset('illustrations/' + pageKey + '.mp4')"
        autoplay
        muted
        loop
        v-if="isVideo"
      />
      <img :src="useAsset('illustrations/' + pageKey + '.png')" alt="" v-else />
    </div>
  </div>
</section>
</template>

<script setup>
const props = defineProps({
  pageKey: String,
  imagePath: String,
  isVideo: Boolean
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
video
  border-radius 2em

section
  padding-bottom 0
</style>
