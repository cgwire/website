<template>
<div class="kitsu-page review-engine">

  <SolutionHeaderBlock
    page-key="review-engine"
  />

  <FeatureBlock
    section-key="review-engine"
    feature-key="playlists"
    colored
  />

  <FeatureBlock
    section-key="review-engine"
    feature-key="compare"
    reverted
  />

  <FeatureBlock
    section-key="review-engine"
    feature-key="room"
    colored
  />

  <CustomerStoryBlock
    studio-name="Miyu studio"
    story-key="miyu"
    interviewee-key="Carole Faure, Production Manager"
    image-path="photo-customer-story-miyu.png"
    story-url="https://blog.cg-wire.com/customer-story-miyu/"
  />

  <Trial />
</div>
</template>

<script setup>
const name = 'Review Engine'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('review-engine header tagline'),
  meta: [
    { name: 'description', content: t('review-engine explaination one')}
  ]
})
</script>
