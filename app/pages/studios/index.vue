<template>
  <div class="studios">
    <section class="section">
      <h2>
        <span class="section-subtitle">
          {{ page.meta.subtitle }}
        </span>
        <span class="section-title">
          {{ page.title }}
        </span>
      </h2>
    </section>

    <section class="section mt0">
      <h2 class="section-subtitle has-text-centered user-title">
        {{ $t('header title tvshows') }}
      </h2>
      <StudiosTVShows />

      <h2 class="section-subtitle has-text-centered user-title">
        {{ $t('header title feature-films') }}
      </h2>
      <StudiosFeature />

      <h2 class="section-subtitle has-text-centered user-title">
        {{ $t('header title shorts') }}
      </h2>
      <StudiosShorts />

      <h2 class="section-subtitle has-text-centered user-title">
        {{ $t('header title video-games') }}
      </h2>
      <StudiosVideoGames />

      <h2 class="section-subtitle has-text-centered user-title">
        {{ $t('header title schools') }}
      </h2>
      <StudiosSchools />
    </section>

    <section class="section productions">
      <h2>
        <span class="section-subtitle">
          {{ page.meta.productions.subtitle }}
        </span>
        <span class="section-title">
          {{ page.meta.productions.title }}
        </span>
      </h2>

      <ul>
        <production
          v-for="(production, index) in productions"
          :key="index"
          :picture="production.picture"
          :title="production.title"
          :url="production.url"
        />
      </ul>
    </section>
  </div>

  <Trial />
</template>

<script setup>
import { productions } from '~/data/productions'

const { locale } = useI18n()
const slug = ref('studios')
const { pageQuery } = usePage(locale, slug)
let { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)
useSEO({
  title: 'CGWire | Kitsu / ' + page.value.title,
  description: page.value.title,
  path: 'studios'
})
</script>

<style lang="stylus" scoped>
.customers
  margin auto

.body h2.section-subtitle.user-title
  margin-bottom 1em
  margin-top 3em

.body h2.section-subtitle.user-title:first-child
  margin-top 0
</style>
