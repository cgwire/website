<template>
  <section class="section content narrower">
    <ContentRenderer v-if="page" :value="page" />
  </section>

  <Trial class="mt4" :cta="false" />
</template>

<script setup>
const { locale } = useI18n()

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
  description:
    'This Policy describes the information we collect from you, how we use that information and our legal basis for doing so. It also covers whether and how that information may be shared and your rights and choices regarding the information you provide to us.'
})
</script>
