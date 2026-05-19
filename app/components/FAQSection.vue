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

    <Faq v-for="faq in faqs" :faq="faq" />
  </section>
</template>

<script setup>
const { locale } = useI18n()

const { data: faqs } = await useAsyncData(
  `faq-section-${locale.value}`,
  () =>
    queryCollection('faq')
      .where('path', 'LIKE', `/faq/${locale.value}/%`)
      .all(),
  { watch: [locale] }
)

const panel = ref(null)

watchEffect(() => {
  if (faqs?.value?.length > 0) {
    panel.value = faqs.value[0].id
  }
})

function selectPanel(section) {
  console.log(section)
  panel.value = section
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
}
</style>
