<template>
  <div v-if="studio" class="studio-page">
    <section class="section content narrower">
      <div class="section-subtitle has-text-centered mt2">
        {{ Array.isArray(studio.type) ? studio.type.join(', ') : studio.type }}
      </div>

      <h2 class="section-title has-text-centered">
        {{ studio.name }}
      </h2>

      <div class="studio-links has-text-centered mt2">
        <a
          v-if="studio.link"
          :href="studio.link"
          target="_blank"
          rel="noopener noreferrer"
          class="button is-primary"
        >
          {{ t('studio.visitWebsite') }}
        </a>

        <NuxtLink
          v-if="studio.case_study"
          :to="
            Array.isArray(studio.case_study)
              ? studio.case_study
              : studio.case_study
          "
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

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})

const slug = props.slug

const { data } = await useAsyncData(slug, () =>
  queryCollection('studios').path(`/studios/${locale.value}/${slug}`).first()
)
console.log(data.value)

const studio = data.value
const content = data.value

useHead({
  title: `CGWire | ${studio?.name}`,
  meta: buildPageMeta(
    t,
    studio?.name,
    Array.isArray(studio?.type) ? studio.type.join(', ') : studio?.type,
    `/studios/${locale.value}/${slug}`
  )
})
</script>
