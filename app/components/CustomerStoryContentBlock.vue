<template>
  <customer-story-block
    :story-url="customerStory.meta.link"
    :studio-name="customerStory.meta.studio"
    :quote="customerStory.meta.quote"
    :interviewee="`${customerStory.meta.interviewee}, ${customerStory.meta.role}`"
    :image="customerStory.meta.image"
  />
</template>

<script setup>
const props = defineProps({
  slug: String
})

const { locale } = useI18n()
const slug = computed(() => props.slug)

const { queryCustomerStory } = useCustomerStory(slug, locale)

const { data: customerStory } = await useAsyncData(
  `customer-story-content-block-${locale.value}-${slug.value}`,
  queryCustomerStory,
  { watch: [locale, slug] }
)
</script>

<style lang="stylus" scoped></style>
