<template>
<div class="kitsu-page tailor-made-architecture">

  <SolutionHeaderBlock
    page-key="tailor-made-architecture"
  />

  <FeatureBlock
    section-key="tailor-made-architecture"
    feature-key="onpremise"
    :shadow="false"
    colored
  />

  <FeatureBlock
    section-key="tailor-made-architecture"
    feature-key="multiinstance"
    :shadow="false"
    reverted
  />

  <FeatureBlock
    section-key="tailor-made-architecture"
    feature-key="extra"
    :shadow="false"
    colored
    gradient
  />

  <Trial />
</div>
</template>

<script setup>
const name = 'Production Tracker'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('tailor-made-architecture header tagline'),
  meta: buildPageMeta(
    t,
    'tailor-made-architecture header tagline',
    'tailor-made-architecture header explanation',
    'tailor-made-architecture',
    'tailor-made-architecture.2a218deb.png'
  )
})
</script>
