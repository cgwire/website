<template>
  <section class="section content narrower">
    <ContentRenderer v-if="page" :value="page" />
  </section>

  <Trial class="mt4" :cta="false" />
</template>

<script setup>
const { locale } = useI18n()
const slug = ref('privacy')

const { pageQuery } = usePage(locale, slug)

let { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

usePageHead({
  title: 'CGWire | ' + useI18n().t('footers link privacy'),
  titleKey: 'Privacy',
  descriptionKey:
    'This Policy describes the information we collect from you, how we use that information and our legal basis for doing so. It also covers whether and how that information may be shared and your rights and choices regarding the information you provide to us.',
  path: 'privacy'
})
</script>
