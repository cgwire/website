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
const localePath = useLocalePath()
const route = useRoute()

const slug = computed(() => route.params.slug)

const { queryTool } = useTool(locale, slug)

const { data: page } = await useAsyncData(
  `tool-${locale.value}-${slug.value}`,
  queryTool,
  { watch: [locale, slug] }
)

const title = `CGWire | ${page.value.title}`
const description = page.value.meta.subtitle
const path = localePath(route.name)
const url = `https://www.cg-wire.com${path}`
useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'og:description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: url },
    // {
    //   name: 'og:image',
    //   content: imgPath
    //     ? 'https://www.cg-wire.com/_nuxt/' + imgPath
    //     : 'https://www.cg-wire.com/_nuxt/team-collaboration.83584c91.png'
    // },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:url', content: url },
    // {
    //   name: 'twitter:image',
    //   content: imgPath
    //     ? 'https://www.cg-wire.com/_nuxt/' + imgPath
    //     : 'https://www.cg-wire.com/_nuxt/team-collaboration.83584c91.png'
    // },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>
