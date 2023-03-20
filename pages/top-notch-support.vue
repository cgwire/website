<template>
<div class="kitsu-page top-notch-support">

  <SolutionHeaderBlock
    page-key="top-notch-support"
  />

  <FeatureBlock
    section-key="top-notch-support"
    feature-key="report"
    colored
  />

  <FeatureBlock
    section-key="top-notch-support"
    feature-key="schedule"
    reverted
  />

  <FeatureBlock
    section-key="top-notch-support"
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
const name = 'Top Notch Support'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('top-notch-support header tagline'),
  meta: [
    { name: 'description', content: t('top-notch-support explaination one')}
  ]
})
</script>
