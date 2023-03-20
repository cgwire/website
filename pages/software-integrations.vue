<template>
<div class="kitsu-page software-integrations">

  <SolutionHeaderBlock
    page-key="software-integrations"
  />

  <FeatureBlock
    section-key="software-integrations"
    feature-key="report"
    colored
  />

  <FeatureBlock
    section-key="software-integrations"
    feature-key="schedule"
    reverted
  />

  <FeatureBlock
    section-key="software-integrations"
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
const name = 'Software Integrations'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('software-integrations header tagline'),
  meta: [
    { name: 'description', content: t('software-integrations explaination one')}
  ]
})
</script>
