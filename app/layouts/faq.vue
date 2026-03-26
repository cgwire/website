<template>
  <div v-if="page" class="compare-page">
    <section class="section content narrower">
      <div>
        <!-- <NuxtImg
                    :src="'/images/illustrations/' + comparison.image"
                    :alt="`Kitsu vs ${comparison.tool}`"
                /> -->
      </div>

      <div class="section-subtitle has-text-centered mt2">
        {{ page.meta.subtitle }}
      </div>

      <h2 class="section-title has-text-centered">
        {{ page.title }}
      </h2>

      <ContentRenderer :value="page" class="section" />
    </section>
  </div>

  <Trial />
</template>

<script setup>
const { t, locale } = useI18n()

let { slug } = await useI18NSlug()

const { data: page } = await useAsyncData(
  slug.value,
  () =>
    queryCollection('faq').path(`/faq/${locale.value}/${slug.value}`).first(),
  { watch: [locale, slug] }
)

useHead({
  title: `CGWire | ${page.title}`
  // meta: buildPageMeta(t, page.title, page.subtitle, `/faq/${slug}`)
})
</script>
