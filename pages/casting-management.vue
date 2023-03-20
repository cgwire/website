<template>
<div class="kitsu-page casting-management">

  <SolutionHeaderBlock
    page-key="casting-management"
  />

  <FeatureBlock
    section-key="casting-management"
    feature-key="tables"
    colored
  />

  <FeatureBlock
    section-key="casting-management"
    feature-key="asset-links"
    reverted
  />

  <FeatureBlock
    section-key="casting-management"
    feature-key="export"
    colored
  />

  <Trial />
</div>
</template>

<script setup>
const name = 'Casting Management'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('casting-management header tagline'),
  meta: [
    { name: 'description', content: t('casting-management explaination one')}
  ]
})
</script>
