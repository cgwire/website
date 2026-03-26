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

useHead({
  title: 'CGWire | Kitsu / ' + t(`${pageKey} header tagline`),
  meta: buildPageMeta(
    t,
    `${pageKey} header tagline`,
    `${pageKey} header explanation`,
    pageKey,
    featurePage.image
  )
})
</script>
