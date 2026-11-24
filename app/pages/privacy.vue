<template>
  <section class="section content narrower">
    <ContentRenderer v-if="page" :value="page" />
  </section>

  <Trial class="mt4" :cta="false" />
</template>

<script setup>
const { locale, t } = useI18n()

const { data: page } = await useAsyncData(
  `privacy-${locale.value}`,
  () =>
    queryCollection('markdownPages')
      .path(`/pages/${locale.value}/privacy`)
      .first(),
  { watch: [locale] }
)

useSEO({
  title: 'CGWire | ' + page.value.title,
  description: t('seo.privacy')
})
</script>
