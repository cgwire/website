<template>
  <div class="compare-page">
    <section class="section content narrower">
      <ContentRenderer v-if="page" :value="page" :data="data" />
    </section>

    <Trial :cta="false" />
  </div>
</template>

<script setup>
import { features } from '~/data/self-hosted-features'

const { locale } = useI18n()

const { data: page } = await useAsyncData(
  `self-hosted-${locale.value}`,
  () =>
    queryCollection('markdownPages')
      .path(`/pages/${locale.value}/self-hosted`)
      .first(),
  { watch: [locale] }
)

const data = ref({ features })

useSEO({
  title: 'CGWire | ' + page.value.title,
  description:
    'Run Kitsu the way it fits your studio: self-hosted free, Kitsu Studio Partners, or the managed cloud.'
})
</script>
