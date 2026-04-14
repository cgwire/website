<template>
  <div v-if="page" :class="`kitsu-page ${pageKey}`">
    <SolutionHeaderBlock :pageKey="page.slug" :header="page.meta.header" />

    <FeatureBlock
      v-for="(feature, index) in page.meta.features"
      :key="index"
      :feature="feature"
    />

    <CustomerStoryBlock
      v-if="customerStory"
      :studio-name="customerStory.studioName"
      :story-key="customerStory.storyKey"
      :interviewee="customerStory.interviewee"
      :image-path="customerStory.imagePath"
      :story-url="customerStory.storyUrl"
      :quote="customerStory.quote"
    />

    <Trial />
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

let { slug } = await useI18NSlug()

const { data: page } = await useAsyncData(
  () => `features-${locale.value}-${slug.value}`,
  () =>
    queryCollection('jsonPages')
      .where('lang', '=', locale.value)
      .where('pageType', '=', 'features')
      .where('slug', '=', slug.value)
      .first(),
  { watch: [locale, slug] }
)

const name = page.value.meta.name
const pageKey = page.value.slug
const customerStory = page.value.meta.customerStory

const title = 'CGWire | Kitsu / ' + name
const description = page.value.meta.header.explanation
const path = localePath(route.name)
const url = `https://www.cg-wire.com${path}`
const imgPath = page.value.meta.image

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'og:description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: url },
    {
      name: 'og:image',
      content: 'https://www.cg-wire.com/_nuxt/' + imgPath
    },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:url', content: url },
    {
      name: 'twitter:image',
      content: 'https://www.cg-wire.com/_nuxt/' + imgPath
    },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>
