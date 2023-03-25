<template>
<div class="kitsu-page top-notch-support">

  <SolutionHeaderBlock
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
  />

  <Trial />
</div>
</template>

<script setup>
const name = 'Top Notch Support'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('top-notch-support header tagline'),
  meta: [
    { name: 'description', content: t('top-notch-support header explanation')}
  ]
})
</script>
