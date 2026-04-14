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
const localePath = useLocalePath()
const route = useRoute()

const { slug } = await useI18NSlug()

const { data } = await useAsyncData(
  `studio-${locale.value}-${slug.value}`,
  () =>
    queryCollection('studios')
      .path(`/studios/${locale.value}/${slug.value}`)
      .first()
)

const studio = data.value

const path = localePath(route.name)
const url = `https://www.cg-wire.com${path}`

const title = `${studio.name} | CGWire Studios`
const description = `${studio.name} uses CGWire's Kitsu. Read the customer interview ->`

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'og:description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: url },
    // {
    //   name: 'og:image',
    //   content: 'https://www.cg-wire.com/_nuxt/' + imgPath
    // },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:url', content: url },
    // {
    //   name: 'twitter:image',
    //   content: 'https://www.cg-wire.com/_nuxt/' + imgPath
    // },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>
