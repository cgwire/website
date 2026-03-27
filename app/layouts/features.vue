<template>
  <div v-if="featurePage" :class="`kitsu-page ${pageKey}`">
    <SolutionHeaderBlock :page-key="pageKey" />

    <FeatureBlock
      v-for="(feature, index) in features"
      :key="index"
      :section-key="pageKey"
      :feature-key="feature.key"
      :colored="feature.colored"
      :reverted="feature.reverted"
      :gradient="feature.gradient"
    />

    <CustomerStoryBlock
      v-if="customerStory"
      :studio-name="customerStory.studioName"
      :story-key="customerStory.storyKey"
      :interviewee="customerStory.interviewee"
      :image-path="customerStory.imagePath"
      :story-url="customerStory.storyUrl"
    />

    <Trial />
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

let { slug } = await useI18NSlug()

const { data } = await useAsyncData(
  slug.value,
  () => queryCollection('pages').path(`/pages/features/${slug.value}`).first(),
  { watch: [locale, slug] }
)
const featurePage = data.value.meta

const name = featurePage.name
const pageKey = featurePage.pageKey
const customerStory = featurePage.customerStory
const features = featurePage.features

const title = 'CGWire | Kitsu / ' + t(`${pageKey} header tagline`)
const description = t(`${pageKey} header explanation`)
const path = localePath(route.name)
const url = `https://www.cg-wire.com${path}`
const imgPath = featurePage.image
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
