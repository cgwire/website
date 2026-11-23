<template>
  <div v-if="page">
    <section class="section content narrower">
      <div class="faq-header has-text-centered">
        <span class="section-subtitle">{{ $t('faq-section.title') }}</span>
        <h2 class="section-title">{{ page.title }}</h2>
        <p v-if="page.meta.subtitle" class="faq-lead">
          {{ page.meta.subtitle }}
        </p>
      </div>

      <ContentRenderer :value="page" class="faq-body long-form" />
    </section>

    <section class="section narrower faq-more">
      <h2 class="faq-more-title">{{ $t('faq-section.more') }}</h2>
      <ul class="faq-more-list">
        <li v-for="link in moreLinks" :key="link.key">
          <nuxt-link :to="link.to">
            <span>{{ link.title }}</span>
            <chevron-right :size="18" aria-hidden="true" />
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>

  <Trial />
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next'

const { locale, t } = useI18n()
const localePath = useLocalePath()

const { slug } = await useI18NSlug()

const { data: page } = await useAsyncData(
  `faq-${locale.value}-${slug.value}`,
  () =>
    queryCollection('faq').path(`/faq/${locale.value}/${slug.value}`).first(),
  { watch: [locale, slug] }
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'FAQ entry not found' })
}

// Same key and handler as the footer list, so the entries are loaded once.
const { data: faqPages } = await useAsyncData(
  `faq-footer-index-${locale.value}`,
  () =>
    queryCollection('faq')
      .where('path', 'LIKE', `/faq/${locale.value}/%`)
      .all(),
  { watch: [locale] }
)

// Same entries and order as the FAQ column of the footer.
const ALTERNATIVES = { shotgrid: 'Shotgrid', ftrack: 'Ftrack' }
const moreLinks = computed(() => [
  ...Object.entries(ALTERNATIVES).map(([key, name]) => ({
    key,
    title: `Kitsu vs ${name}`,
    to: localePath({
      name: 'slug-alternative',
      params: { slug: t(`slugs.${key}`) }
    })
  })),
  {
    key: 'self-hosted',
    title: t('footers.link.hosting'),
    to: localePath('self-hosted')
  },
  ...(faqPages.value || [])
    .filter(faq => faq.meta.slug !== page.value.meta.slug)
    .map(faq => ({
      key: faq.meta.slug,
      title: faq.title,
      to: localePath({
        name: 'faq-slug',
        params: { slug: t(`slugs.${faq.meta.slug}`) }
      })
    }))
])

useSEO({
  title: `CGWire | ${page.value.title}`,
  description: page.value.meta.subtitle
})
</script>

<style lang="stylus" scoped>
.faq-header
    margin-top 5rem

    // Same title block as the alternative pages.
    .section-subtitle
        margin-bottom 0

    .section-title
        margin .2em 0 .5em
        font-size 2.3em

.faq-lead
    max-width 36em
    margin 0 auto
    font-size 1.25rem
    color var(--pg-text-mid, text-slate)

// Text column narrower than the page (about 70 characters per line) for
// reading; tables and customer stories keep the full page width.
.faq-body
    margin-top 3rem

    & > :deep(:not(.customer-story):not(table))
        max-width 760px
        margin-left auto
        margin-right auto

    // Section headings spaced and sized like the alternative pages. Doubled
    // class to outweigh Bulma's ".content h2:not(:first-child)" margins.
    &.long-form :deep(h2)
        margin-top 4.4em
        margin-bottom .67em
        font-size 1.5em

    &.long-form :deep(h3)
        margin-top 2em
        margin-bottom .5em
        font-size 1.2em

    & > :deep(:first-child)
        margin-top 0

.faq-more
    padding-top 4rem
    padding-bottom 5rem

.faq-more-title
    margin-bottom 1.5rem
    font-size 1.5rem
    font-weight bold

.faq-more-list
    display grid
    grid-template-columns repeat(auto-fill, minmax(240px, 1fr))
    gap .75rem
    margin 0
    padding 0
    list-style none

    a
        display flex
        align-items center
        justify-content space-between
        gap 1rem
        height 100%
        padding 1rem 1.25rem
        border 1px solid var(--pg-border, #dbe8ff)
        border-radius 12px
        background var(--pg-card, lightblue)
        color var(--pg-text, #363636)
        font-weight 600
        line-height 1.3
        transition border-color .15s

        &:hover
        &:focus-visible
            border-color cgwiregreen

    svg
        flex 0 0 auto
        color cgwiregreen
</style>
