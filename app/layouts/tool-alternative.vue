<template>
  <div class="compare-page">
    <section class="section content narrower">
      <div>
        <NuxtImg
          :src="'/images/illustrations/' + comparison.meta.image"
          :alt="`Kitsu vs ${comparison.meta.tool}`"
        />
      </div>

      <div class="section-subtitle has-text-centered mt2">
        {{ comparison.meta.subtitle }}
      </div>

      <h2 class="section-title has-text-centered">
        {{ comparison.title }}
      </h2>

      <div
        v-for="(section, index) in comparison.meta.sections"
        :key="index"
        class="section"
      >
        <h3>{{ section.title }}</h3>

        <p v-for="(paragraph, pIndex) in section.content" :key="pIndex">
          {{ paragraph }}
        </p>
      </div>
    </section>
  </div>

  <Trial />
</template>

<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const { slug } = await useI18NSlug()

const { data: comparison } = await useAsyncData(
  () => `alternatives-${locale.value}-${slug.value}`,
  () =>
    queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'alternatives')
      .where('slug', '=', slug.value)
      .first(),
  { watch: [locale, slug] }
)

const title = `CGWire | Kitsu vs ${comparison.value.meta.tool}`
const description = comparison.value.meta.subtitle
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
