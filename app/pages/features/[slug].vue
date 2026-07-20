<template>
  <div v-if="page" :class="`kitsu-page ${pageKey}`">
    <SolutionHeaderBlock :page-key="page.slug" :header="page.meta.header" />

    <FeatureBlock
      v-for="(feature, index) in page.meta.features"
      :key="index"
      :feature="feature"
      :last="index === page.meta.features.length - 1"
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

    <Trial :contact="hasContactCta" />
  </div>
</template>

<script setup>
const { locale } = useI18n()

const { slug } = await useI18NSlug()

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

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Feature not found' })
}

const pageKey = page.value.slug
const customerStory = page.value.meta.customerStory

// Pages selling the managed service and the human relationship close on a
// contact CTA rather than the signup form.
const CONTACT_CTA_PAGES = [
  'elite-hosting',
  'tailor-made-architecture',
  'top-notch-support'
]
const hasContactCta = CONTACT_CTA_PAGES.includes(pageKey)

useSEO({
  title: 'CGWire | Kitsu / ' + page.value.meta.name,
  description: page.value.meta.header.explanation,
  imagePath: page.value.meta.image
})
</script>
