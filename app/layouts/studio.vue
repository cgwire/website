<template>
  <div v-if="studio" class="studio-page">
    <section class="section content narrower">
      <div class="section-subtitle has-text-centered mt2">
        {{
          Array.isArray(studio.meta.type)
            ? studio.meta.type.join(', ')
            : studio.meta.type
        }}
      </div>

      <h2 class="section-title has-text-centered">
        {{ studio.meta.name }}
      </h2>

      <div class="studio-links has-text-centered mt2">
        <a
          v-if="studio.meta.link"
          :href="studio.meta.link"
          target="_blank"
          rel="noopener noreferrer"
          class="button is-primary"
        >
          {{ t('studio.visitWebsite') }}
        </a>

        <NuxtLink
          v-if="studio.meta.case_study"
          :to="studio.meta.case_study"
          class="button is-secondary ml2"
        >
          {{ t('studio.viewCaseStudy') }}
        </NuxtLink>
      </div>
    </section>
  </div>

  <Trial />
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const { slug } = await useI18NSlug()
const { queryStudio } = useStudio(slug, locale)

const { data: studio } = await useAsyncData(
  `studio-${locale.value}-${slug.value}`,
  queryStudio,
  { watch: [locale, slug] }
)

useSEO({
  title: `${studio.value.meta.name} | CGWire Studios`,
  description: `${studio.value.meta.name} uses CGWire's Kitsu. Read the customer interview ->`
})
</script>
