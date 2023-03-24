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

  <CustomerStoryBlock
    studio-name="Autour De Minuit"
    story-key="adm"
    interviewee-key="Fiona Cohen, Production Manager"
    image-path="photo-customer-story-adm.jpg"
    story-url="https://blog.cg-wire.com/customer-story-autour-de-minuit/"
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
    { name: 'description', content: t('casting-management header explaination')}
  ]
})
</script>
