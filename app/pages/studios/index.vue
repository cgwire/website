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
        {{ $t('header.title.tvshows') }}
      </h2>
      <StudiosList type="tvshows" />

      <h2 class="section-subtitle has-text-centered user-title">
        {{ $t('header.title.feature-films') }}
      </h2>
      <StudiosList type="feature-films" />

      <h2 class="section-subtitle has-text-centered user-title">
        {{ $t('header.title.shorts') }}
      </h2>
      <StudiosList type="shorts" />

      <h2 class="section-subtitle has-text-centered user-title">
        {{ $t('header.title.vfx') }}
      </h2>
      <StudiosVFX />

      <h2 class="section-subtitle has-text-centered user-title">
        {{ $t('header.title.video-games') }}
      </h2>
      <StudiosList type="video-games" />

      <h2 class="section-subtitle has-text-centered user-title">
        {{ $t('header.title.schools') }}
      </h2>
      <StudiosList type="schools" />
    </section>
  </div>

  <Trial />
</template>

<script setup>
const { locale, t } = useI18n()
const slug = ref('studios')
const { pageQuery } = usePage(locale, slug)
const { data: page } = await useAsyncData(
  `${slug.value}-${locale.value}`,
  pageQuery,
  { watch: [slug, locale] }
)
useSEO({
  title: 'CGWire | Kitsu / ' + page.value.title,
  description: t('seo.studios')
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
