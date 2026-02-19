<template>
<div
  class="kitsu-page top-notch-support"
>

  <SolutionHeaderBlock
    class="mt8"
    page-key="top-notch-support"
    is-video
  />

  <FeatureBlock
    section-key="top-notch-support"
    feature-key="fast"
    colored
  />

  <FeatureBlock
    section-key="top-notch-support"
    feature-key="chat"
    reverted
  />

  <FeatureBlock
    section-key="top-notch-support"
    feature-key="experts"
    colored
    gradient
  />

  <Trial />
</div>
</template>

<script setup>
const name = 'Top Notch Support'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('top-notch-support header tagline'),
  meta: buildPageMeta(
    t,
    'top-notch-support header tagline',
    'top-notch-support header explanation',
    'top-notch-support',
  )
})
</script>
