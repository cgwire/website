<template>
<div class="kitsu-page production-tracker">

  <SolutionHeaderBlock
    page-key="production-tracker"
  />

  <FeatureBlock
    section-key="production-tracker"
    feature-key="report"
    colored
  />

  <FeatureBlock
    section-key="production-tracker"
    feature-key="schedule"
    reverted
  />

  <FeatureBlock
    section-key="production-tracker"
    feature-key="quotas"
    colored
  />

  <CustomerStoryBlock
    studio-name="Fost studio"
    story-key="fost"
    interviewee-key="Céline Durieux, Head Of Studio"
    image-path="photo-customer-story-fost.png"
    story-url="https://blog.cg-wire.com/customer-story-fost-studio/"
  />

  <Trial />
</div>
</template>

<script setup>
const name = 'Production Tracker'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('production-tracker header tagline'),
  meta: [
    { name: 'description', content: t('production-tracker explanation one')}
  ]
})
</script>
