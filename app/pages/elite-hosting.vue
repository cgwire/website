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
const name = 'Elite Hosting'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('elite-hosting header tagline'),
  meta: buildPageMeta(
    t,
    'elite-hosting header tagline',
    'elite-hosting header explanation',
    'elite-hosting',
    'elite-hosting.41201633.png'
  )
})
</script>
