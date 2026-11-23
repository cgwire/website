<template>
  <section class="section content use-case">
    <h2>
      <span class="section-subtitle">
        {{ $t('faq-section.subtitle') }}
      </span>
      <span class="section-title">
        {{ $t('faq-section.title') }}
      </span>
    </h2>

    <!-- Same wrapper as the pricing page FAQ, so both share one style. -->
    <div class="faq">
      <FAQItem v-for="faq in shownFaqs" :key="faq.id" :faq="faq" />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  // Slugs of the questions to show, in order. All of them when omitted.
  slugs: Array
})

const { locale } = useI18n()

const { data: faqs } = await useAsyncData(
  `faq-section-${locale.value}`,
  () =>
    queryCollection('faq')
      .where('path', 'LIKE', `/faq/${locale.value}/%`)
      .all(),
  { watch: [locale] }
)

const shownFaqs = computed(() =>
  props.slugs
    ? props.slugs
        .map(slug => faqs.value?.find(faq => faq.meta.slug === slug))
        .filter(Boolean)
    : faqs.value
)
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
}
</style>
