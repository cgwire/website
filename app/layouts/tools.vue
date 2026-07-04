<template>
  <div v-if="page" class="compare-page">
    <section class="section content narrower">
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

const { queryTool } = useTool(locale, slug)

const { data: page } = await useAsyncData(
  `tool-${locale.value}-${slug.value}`,
  queryTool,
  { watch: [locale, slug] }
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Tool not found' })
}

useSEO({
  title: `CGWire | ${page.value.title}`,
  description: page.value.meta.subtitle
})
</script>
