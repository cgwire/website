<template>
  <div
    class="flexrow kitsu-feature-block"
    :class="direction === 'right' ? 'flexrow-reverse' : ''"
  >
    <div class="kitsu-feature-block-content">
      <h3>
        <nuxt-link :to="featurePath">{{ feature.title }}</nuxt-link>
      </h3>
      <p>
        {{ feature.content }}
      </p>
    </div>
    <div class="kitsu-feature-block-image">
      <!-- The title already links to the page: this copy of the link is for
           mouse users, so it stays out of the tab order and the a11y tree. -->
      <nuxt-link
        class="feature-img-wrapper"
        :class="color"
        :to="featurePath"
        tabindex="-1"
        aria-hidden="true"
      >
        <NuxtImg
          :class="{ 'only-light': dark }"
          :src="'/images/screenshots/' + light"
          :style="ratio"
          :alt="feature.title"
          loading="lazy"
        />
        <NuxtImg
          class="only-dark"
          :src="'/images/screenshots/' + dark"
          :style="ratio"
          :alt="feature.title"
          loading="lazy"
          v-if="dark"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  feature: Object,
  featureKey: String,
  direction: String,
  color: {
    type: String,
    default: 'green'
  }
})

// Feature page that details each block.
const FEATURE_PAGES = {
  api: 'studio-database',
  assets: 'production-tracker',
  breakdown: 'casting-management',
  forecast: 'production-tracker',
  library: 'casting-management',
  news: 'team-collaboration',
  report: 'production-tracker',
  review: 'review-engine',
  'review-assets': 'review-engine',
  schedule: 'production-tracker',
  search: 'production-tracker',
  timesheets: 'production-tracker',
  track: 'team-collaboration'
}

// Animated illustrations: light version, then dark one when it exists.
// Height of each file, for a width of 1440: the image keeps its place while
// it loads. The light and dark files have the same size.
const ILLUSTRATIONS = {
  api: [575, 'kitsu-python-animated.svg'],
  assets: [702, 'kitsu-assets-animated.svg', 'kitsu-assets-animated-dark.svg'],
  breakdown: [
    964,
    'kitsu-tables-animated.svg',
    'kitsu-tables-animated-dark.svg'
  ],
  forecast: [
    844,
    'kitsu-budget-animated.svg',
    'kitsu-budget-animated-dark.svg'
  ],
  library: [
    964,
    'kitsu-library-animated.svg',
    'kitsu-library-animated-dark.svg'
  ],
  news: [945, 'kitsu-news-animated.svg', 'kitsu-news-animated-dark.svg'],
  report: [1080, 'kitsu-report-animated.svg', 'kitsu-report-animated-dark.svg'],
  review: [998, 'kitsu-playlists-animated.svg'],
  'review-assets': [894, 'kitsu-compare-animated.svg'],
  schedule: [
    822,
    'kitsu-schedule-animated.svg',
    'kitsu-schedule-animated-dark.svg'
  ],
  search: [880, 'kitsu-search-animated.svg', 'kitsu-search-animated-dark.svg'],
  timesheets: [
    745,
    'kitsu-timesheets-animated.svg',
    'kitsu-timesheets-animated-dark.svg'
  ],
  track: [909, 'kitsu-tasks-animated.svg', 'kitsu-tasks-animated-dark.svg']
}
const [height, light, dark] = ILLUSTRATIONS[props.featureKey]
const ratio = { aspectRatio: `auto 1440 / ${height}` }

const { t } = useI18n()
const localePath = useLocalePath()
const featurePath = computed(() =>
  localePath({
    name: 'features-slug',
    params: { slug: t(`slugs.${FEATURE_PAGES[props.featureKey]}`) }
  })
)
</script>

<style scoped lang="stylus">
.kitsu-feature-block-content
  margin-right: 3em
  max-width: 400px
  width: 50%

  // Same size as the h1 these titles used to be.
  h3
    font-size: 2em
    margin-bottom: 0.5em

    a
      color: inherit

      &:hover
        color: cgwiregreen

// The column and the image have a width that does not depend on the file, so
// the panel has its final size before the image loads. The basis is the
// max-width of the panel.
.kitsu-feature-block-image
  flex: 0 1 600px
  min-width: 0

.feature-img-wrapper
  border-radius: 20px
  display: block
  max-width: 600px
  margin: 0 auto
  background-color: #c2f0ab
  border: 10px solid #ffffff66
  padding: 32px

  &.purple
    background-color: #e9e1ec

  &.blue
    background-color: #e0e8ff

  img
    // An inline image on the baseline leaves a line descender gap under it.
    // Not display block: it would override the only-light and only-dark rules.
    vertical-align: top
    border-radius: 20px
    margin 0
    width: 100%

.flexrow-reverse
  flex-direction: row-reverse
  justify-content: flex-end

  .kitsu-feature-block-content
    margin-left: 3em
    margin-right: 0

  .feature-img-wrapper
    background-color: #f9f6fd

.kitsu-feature-block
  padding: 1em
  margin-bottom: 8em

// The page column is 1000px wide: on larger screens the rows go beyond it,
// up to 1240px, so the screenshots stay readable.
@media (min-width: 1100px)
  .kitsu-feature-block
    margin-left: calc((100% - min(1240px, 100vw - 4em)) / 2)
    margin-right: calc((100% - min(1240px, 100vw - 4em)) / 2)

  .kitsu-feature-block-image
    flex-basis: 760px

  .feature-img-wrapper
    max-width: 760px

@media (max-width: 768px)
  .kitsu-feature-block
    flex-direction: column-reverse

  .kitsu-feature-block-content
    margin-right: 0
    margin-left: 0
    margin-top: 2em
    width: 100%

  .kitsu-feature-block-image
    flex: none
    width: 100%

  .feature-img-wrapper
    padding: 16px
    width: 100%

  .flexrow-reverse

    .kitsu-feature-block-content
      margin-left: 0
</style>
