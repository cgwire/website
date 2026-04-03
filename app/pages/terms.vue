<template>
  <section class="section content narrower">
    <ContentRenderer v-if="page" :value="page" />
  </section>

  <Trial class="mt4" :cta="false" />
</template>

<script setup>
const { locale } = useI18n()
const slug = ref('terms')

const { pageQuery } = usePage(locale, slug)

let { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)

usePageHead({
  title: 'CGWire | ' + useI18n().t('footers link terms'),
  titleKey: 'Terms Of Service',
  descriptionKey:
    'By using the CGWire Hosting (“Service”) provided by CGWire (“Company”), you are agreeing to be bound by the following terms and conditions (“Terms of Service”). If you do not agree to these Terms of Service, do not use this Service. By accepting these Terms of Service below or by using the Service in any manner, you and the entity you represent (“Customer”) agree that you have read and agree to be bound by this agreement to the exclusion of all other terms.',
  path: 'terms'
})
</script>
