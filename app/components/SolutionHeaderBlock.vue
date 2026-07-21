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
        <figure v-if="quote" class="header-quote">
          <blockquote class="header-quote-text">
            {{ quote.meta.quote }}
          </blockquote>
          <figcaption class="header-quote-author">
            <NuxtImg
              :src="quote.meta.image"
              :alt="quote.meta.interviewee"
              format="webp"
            />
            <span>
              <strong>{{ quote.meta.interviewee }}</strong>
              {{ quote.meta.role }} at {{ quote.meta.studio }}
            </span>
          </figcaption>
        </figure>
        <ul v-if="header.stats" class="header-stats">
          <li v-for="s in header.stats" :key="s.label">
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </li>
        </ul>
        <a v-if="header.docsCta" class="docs-cta" :href="header.docsCta.url">
          {{ header.docsCta.label }}
        </a>
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
  pageKey: String,
  quote: Object
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

// Secondary CTA under the header (e.g. "Read the API docs"). Outline style so
// it never competes with the primary Try Kitsu button at the page bottom.
.docs-cta
  display inline-block
  margin-top 1.8rem
  padding 0.8rem 1.6rem
  border 2px solid cgwiregreen
  border-radius 2em
  background white
  color cgwiregreen
  font-weight bold
  transition background 0.2s ease

  &:hover
    background lightblue

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

// Featured testimonial in the header. A green accent bar echoes the brand
// without competing with the tagline. The avatar rule below has to out-specify
// the component's global `:deep(img) { width 100% }` used for the illustration.
.header-quote
  margin 2.2rem 0 0
  padding 0.1rem 0 0.1rem 1.3rem
  border-left 3px solid cgwiregreen
  max-width 32rem

  // Neutralise Bulma's .content blockquote box (whitesmoke bg + grey border)
  // so only the figure's green accent bar remains.
  .header-quote-text
    margin 0
    padding 0
    background transparent
    border-left 0
    text-align left
    font-size 1.05rem
    line-height 1.55
    font-style italic
    color darkgrey

  .header-quote-author
    display flex
    align-items center
    justify-content flex-start
    gap 0.7rem
    margin-top 1rem
    text-align left
    font-size 0.85rem
    line-height 1.35
    color mediumgrey

    strong
      display block
      color darkgrey
      font-weight 700
      font-style normal

    :deep(img)
      width 44px
      height 44px
      border-radius 50%
      flex 0 0 auto
</style>
