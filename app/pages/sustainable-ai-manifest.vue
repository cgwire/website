<template>
  <section class="section content narrower">
    <ContentRenderer v-if="page" :value="page" />
  </section>
</template>

<script setup>
const { locale } = useI18n()

const { data: page } = await useAsyncData(
  `sustainable-ai-manifest-${locale.value}`,
  async () =>
    // Only the English version exists for now; fall back to it for the FR/JA
    // routes until translations are added under content/pages/{fr,ja}/.
    (await queryCollection('markdownPages')
      .path(`/pages/${locale.value}/sustainable-ai-manifest`)
      .first()) ||
    (await queryCollection('markdownPages')
      .path('/pages/en/sustainable-ai-manifest')
      .first()),
  { watch: [locale] }
)

useSEO({
  title: 'CGWire | ' + page.value.title,
  description:
    'How we integrate AI responsibly: the ethical, resource, and UX limits we set to keep it sustainable in the long term.'
})
</script>
