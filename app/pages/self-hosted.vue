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

const { locale, t } = useI18n()

const { data: page } = await useAsyncData(
  `self-hosted-${locale.value}`,
  () =>
    queryCollection('markdownPages')
      .path(`/pages/${locale.value}/self-hosted`)
      .first(),
  { watch: [locale] }
)

const data = { features }

useSEO({
  title: 'CGWire | ' + page.value.title,
  description: t('seo.selfHosted')
})
</script>
