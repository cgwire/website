<template>
<div class="kitsu-page tailor-made-architecture">

  <SolutionHeaderBlock
    page-key="tailor-made-architecture"
  />

  <FeatureBlock
    section-key="tailor-made-architecture"
    feature-key="report"
    colored
  />

  <FeatureBlock
    section-key="tailor-made-architecture"
    feature-key="schedule"
    reverted
  />

  <FeatureBlock
    section-key="tailor-made-architecture"
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
  title: 'CGWire | Kitsu / ' + t('tailor-made-architecture header tagline'),
  meta: [
    { name: 'description', content: t('tailor-made-architecture explaination one')}
  ]
})
</script>
