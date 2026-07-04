<template>
  <div v-if="page" class="compare-page">
    <section class="section content narrower">
      <div></div>

      <div class="section-subtitle has-text-centered mt2">
        {{ page.meta.subtitle }}
      </div>

      <h2 class="section-title has-text-centered">
        {{ page.title }}
      </h2>

      <ContentRenderer :value="page" class="section" />
    </section>
  </div>

  <Trial />
</template>

<script setup>
const { locale } = useI18n()

const { slug } = await useI18NSlug()

const { data: page } = await useAsyncData(
  `faq-${locale.value}-${slug.value}`,
  () =>
    queryCollection('faq').path(`/faq/${locale.value}/${slug.value}`).first(),
  { watch: [locale, slug] }
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'FAQ entry not found' })
}

useSEO({
  title: `CGWire | ${page.value.title}`,
  description: page.value.meta.subtitle
})
</script>
