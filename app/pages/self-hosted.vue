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
const slug = ref('self-hosted')

const { pageQuery } = usePage(locale, slug)

let { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

const data = ref({
  // features: JSON.stringify(features),
  // supportFeatures: JSON.stringify(supportFeatures)
  features,
  supportFeatures
})

usePageHead({
  title: 'CGWire | Cloud vs Self-Hosted',
  titleKey: 'comparison selfhosted title',
  descriptionKey: 'comparison selfhosted subtitle',
  path: 'self-hosted'
})
</script>
