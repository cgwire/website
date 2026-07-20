<template>
  <section class="section">
    <div class="tile">
      <div class="tile is-6 is-child content">
        <h2 class="solution-title">
          <span class="section-subtitle mt2">
            {{ header.subtitle }}
          </span>
          <span class="section-title">
            {{ header.tagline }}
          </span>
        </h2>
        <p>
          {{ header.explanation }}
        </p>
        <ul v-if="header.stats" class="header-stats">
          <li v-for="s in header.stats" :key="s.label">
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </li>
        </ul>
      </div>
      <div class="tile is-6 is-child">
        <video
          :src="useAsset(pageKey + '.webm')"
          autoplay
          muted
          loop
          v-if="isVideo"
        />
        <NuxtImg
          :src="'/images/illustrations/' + pageKey + '.png'"
          format="webp"
          alt=""
          v-else
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  header: Object,
  imagePath: String,
  isVideo: Boolean,
  pageKey: String
})

function useAsset(path) {
  const assets = import.meta.glob('~/assets/images/illustrations/*', {
    eager: true,
    import: 'default'
  })

  return assets['/assets/images/illustrations/' + path]
}
</script>

<style lang="stylus" scoped>
video
  border-radius 2em
  width 100%
  height auto

:deep(img)
  width 100%
  height auto

section
  padding-bottom 0

// Measured figures shown under the header text (uptime goal, backups...).
// Doubled selector to outweigh the global Bulma .content ul margins.
ul.header-stats
  display flex
  flex-wrap wrap
  gap 1.5rem 2.5rem
  list-style none
  margin 1.8rem 0 0
  padding 0

  li
    display flex
    flex-direction column
    margin 0

  .stat-value
    font-size 1.7rem
    font-weight 800
    color cgwiregreen
    line-height 1.2

  .stat-label
    font-size 0.85rem
    color mediumgrey
</style>
