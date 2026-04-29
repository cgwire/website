<template>
  <section
    class="section content landing-block customer-story mt2"
    data-aos="fade-up"
  >
    <a :href="customerStory.meta.link">
      <div class="flexrow reverse">
        <div class="flexrow-item landing-picture">
          <NuxtImg
            :src="customerStory.meta.image"
            format="webp"
            width="320"
            height="240"
            :alt="customerStory.meta.studio"
          />
        </div>
        <div class="flexrow-item landing-text">
          <h2 class="section-subtitle">
            Customer Story:<br />
            {{ customerStory.meta.studio }}
          </h2>
          <p>
            <em> "{{ customerStory.meta.quote }}" </em><br />
          </p>
          <p class="mt1">
            {{ customerStory.meta.interviewee }}, {{ customerStory.meta.role }}
          </p>
        </div>
      </div>
    </a>
  </section>
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
