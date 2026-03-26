<template>
  <div v-if="comparison" class="compare-page">
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
const { t, locale } = useI18n()

let { slug } = await useI18NSlug()

const { data } = await useAsyncData(
  slug.value,
  () =>
    queryCollection('alternatives')
      .path(`/alternatives/${locale.value}/${slug.value}`)
      .first(),
  { watch: [locale, slug] }
)

const comparison = data.value

useHead({
  title: `CGWire | Kitsu vs ${comparison.meta.tool}`,
  meta: buildPageMeta(
    t,
    comparison.title,
    comparison.meta.subtitle,
    slug,
    comparison.meta.image
  )
})
</script>
