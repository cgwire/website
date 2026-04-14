<template>
  <div class="compare-page">
    <section class="section content narrower">
      <ContentRenderer v-if="page" :value="page" :data="data" />
    </section>

    <Trial />
  </div>
</template>

<script setup>
import { features, supportFeatures } from '~/data/self-hosted-features'

const { locale } = useI18n()

const { data: page } = await useAsyncData(
  `self-hosted-${locale.value}`,
  () =>
    queryCollection('markdownPages')
      .path(`/pages/${locale.value}/self-hosted`)
      .first(),
  { watch: [locale] }
)

const data = ref({
  // features: JSON.stringify(features),
  // supportFeatures: JSON.stringify(supportFeatures)
  features,
  supportFeatures
})

useSEO({
  title: 'CGWire | ' + page.value.title,
  description:
    'Kitsu is free and open-source software, meaning you can install and use it at no cost.'
})
</script>
