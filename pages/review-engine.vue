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
    studio-name="Makuta VFX"
    story-key="makuta"
    interviewee="Pete Draper, Head of VFX"
    image-path="photo-customer-story-makuta.png"
    story-url="https://blog.cg-wire.com/customer-story-makuta-vfx-studio/"
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
    { name: 'description', content: t('review-engine header explanation')}
  ]
})
</script>
