<template>
<div class="kitsu-page elite-hosting">

  <SolutionHeaderBlock
    page-key="elite-hosting"
  />

  <FeatureBlock
    section-key="elite-hosting"
    feature-key="security"
    colored
  />

  <FeatureBlock
    section-key="elite-hosting"
    feature-key="availability"
    reverted
  />

  <FeatureBlock
    section-key="elite-hosting"
    feature-key="performance"
    :shadow="false"
    colored
    gradient
  />

  <Trial />
</div>
</template>

<script setup>
const name = 'Team Collaboration'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('elite-hosting header tagline'),
  meta: [
    { name: 'description', content: t('elite-hosting header explanation')}
  ]
})
</script>
