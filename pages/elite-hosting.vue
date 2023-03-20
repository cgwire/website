<template>
<div class="kitsu-page elite-hosting">

  <SolutionHeaderBlock
    page-key="elite-hosting"
  />

  <FeatureBlock
    section-key="elite-hosting"
    feature-key="tasks"
    colored
  />

  <FeatureBlock
    section-key="elite-hosting"
    feature-key="todos"
    reverted
  />

  <FeatureBlock
    section-key="elite-hosting"
    feature-key="news"
    colored
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
    { name: 'description', content: t('elite-hosting explaination one')}
  ]
})
</script>
