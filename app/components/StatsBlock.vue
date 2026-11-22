<template>
  <div class="flexrow number-blocks">
    <div class="flexcolumn flexrow-item number-block">
      <p class="number-block-number">{{ activeUsers }}</p>
      <p class="number-block-title">
        {{ stats.activeUsers }}
      </p>
    </div>
    <div class="flexcolumn flexrow-item number-block">
      <p class="number-block-number">10,000+</p>
      <p class="number-block-title">
        {{ stats.videoReviews }}
      </p>
    </div>
    <div class="flexcolumn flexrow-item number-block">
      <p class="number-block-number">30+</p>
      <p class="number-block-title">
        {{ stats.countries }}
      </p>
    </div>
  </div>
</template>

<script setup>
import metrics from '~/data/metrics.json'

const props = defineProps({
  stats: Object
})

const { locale } = useI18n()

// Same basis as the total of the metrics page: cloud customers plus the
// self-hosted setups updated in the last 6 months. Rounded down to the
// thousand so the claim stays true between updates.
const activeUsers = computed(() => {
  const users =
    metrics.instances.last6Months.activeUsers +
    metrics.instances.cloud.activeUsers
  return `${(Math.floor(users / 1000) * 1000).toLocaleString(locale.value)}+`
})
</script>

<style lang="stylus" scoped>
div.body
    .number-blocks
        display grid
        margin-top 4em
        width 100%
        grid-template-columns 1fr 1fr 1fr
        gap 1em

        .number-block
            align-items center
            justify-content center

        .number-block-title
            color #888
            font-size 1.2em
            text-transform uppercase
            font-weight bold

        .number-block-number
            font-weight bold
            font-size 3em
            margin-bottom 0.2em

    @media(max-width 800px)
        .number-blocks
            grid-template-columns 1fr
            gap 2em
</style>
