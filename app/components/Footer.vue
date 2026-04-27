<template>
  <footer class="footer">
    <div class="footer-main">
      <!-- Brand Column -->
      <div class="footer-brand">
        <nuxt-link :to="$localePath('index')" class="footer-logo-link">
          <img
            class="footer-logo"
            src="~/assets/images/logo.png"
            alt="CGWire logo"
            width="100"
          />
        </nuxt-link>
        <p class="footer-mission">
          {{ page.meta.main.subtitle }}
        </p>
        <div class="footer-social">
          <a
            href="https://www.linkedin.com/company/cgwire/"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        <a href="https://instagram.com/cgwire" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://github.com/cgwire" aria-label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <p class="footer-title">{{ $t('header title product') }}</p>
        <ul class="footer-links">
          <li>
            <nuxt-link :to="$localePath('kitsu')">
              Kitsu
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="$localePath('studios')">{{
              $t('header title studios')
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="$localePath('customer-stories')">{{
              $t('header title customer-stories')
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="
                $localePath({
                  name: 'features-slug',
                  params: { slug: $t('slugs.production-tracker') }
                })
              "
            >
              {{ $t('header title production-tracker') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="
                $localePath({
                  name: 'features-slug',
                  params: { slug: $t('slugs.review-engine') }
                })
              "
            >
              {{ $t('header title review-engine') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="$localePath('software-integrations')">{{
              $t('header title software-integrations')
            }}</nuxt-link>
          </li>
        </ul>
      </div>

      <!-- Resources Column -->
      <div class="footer-col">
        <p class="footer-title">{{ $t('header title resources') }}</p>
        <ul class="footer-links">
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLp_1gB5ZBHXqnQgZ4TCrAt7smxesaDo29"
            >
              {{ $t('header title tutorials') }}
            </a>
          </li>
          <li><a href="https://blog.cg-wire.com">Blog</a></li>
          <li>
            <a href="https://kitsu.cg-wire.com">{{
              $t('header title documentation')
            }}</a>
          </li>
          <li>
            <a href="https://dev.kitsu.cloud">{{ $t('header title dev') }}</a>
          </li>
          <li>
            <a href="https://cgwire.canny.io/changelog">Changelog</a>
          </li>
          <li>
            <a href="https://poeditor.com/join/project?hash=fpUejpWDVo">{{
              $t('header title translations')
            }}</a>
          </li>
          <li>
            <a href="https://hub.docker.com/r/cgwire/cgwire">{{
              $t('header title docker')
            }}</a>
          </li>
        </ul>
      </div>

      <!-- Company Column -->
      <div class="footer-col">
        <p class="footer-title">{{ $t('footers title company') }}</p>
        <ul class="footer-links">
          <li>
            <nuxt-link :to="$localePath('about')">{{
              $t('footers link about')
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="$localePath('contact')">{{
              $t('footers link contact')
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="$localePath('carbon-report')">{{
              $t('footers link carbon')
            }}</nuxt-link>
          </li>
          <li>
            <a href="https://metrics.cg-wire.com">{{
              $t('footers link metrics')
            }}</a>
          </li>
          <li>
            <nuxt-link :to="$localePath('terms')">{{
              $t('footers link terms')
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="$localePath('privacy')">{{
              $t('footers link privacy')
            }}</nuxt-link>
          </li>
        </ul>
      </div>
      <!-- FAQ Column — second row, full width -->
      <div class="footer-col footer-col--faq">
        <p class="footer-title">{{ $t('pricing faq title') }}</p>
        <ul class="footer-links">
          <li>
            <nuxt-link
              :to="
                $localePath({
                  name: 'slug-alternative',
                  params: { slug: $t('slugs.shotgrid') }
                })
              "
            >
              Kitsu vs Shotgrid
            </nuxt-link>
          </li>
          <li>
            <NuxtLink
              :to="
                $localePath({
                  name: 'slug-alternative',
                  params: { slug: $t('slugs.ftrack') }
                })
              "
            >
              Kitsu vs Ftrack
            </NuxtLink>
          </li>

          <li v-for="faq in faqPages">
            <NuxtLink
              :to="
                $localePath({
                  name: 'faq-slug',
                  params: { slug: $t(`slugs.${faq.meta.slug}`) }
                })
              "
            >
              {{ faq.title }}
            </NuxtLink>
          </li>
          <li>
            <nuxt-link :to="$localePath('self-hosted')">
              Cloud vs Self-Hosted
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Copyright bar -->
    <div class="footer-bottom">
      <p class="footer-copyright">
        © {{ new Date().getFullYear() }} CGWire. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
const { locale } = useI18n()
const slug = ref('index')

const { pageQuery } = usePage(locale, slug)

const { data: page } = await useAsyncData(`index-${locale.value}`, pageQuery, {
  watch: [slug, locale]
})

const { data: faqPages } = await useAsyncData(
  `faq-footer-index-${locale.value}`,
  () =>
    queryCollection('faq')
      .where('path', 'LIKE', `/faq/${locale.value}/%`)
      .all(),
  { watch: [locale] }
)
</script>

<style lang="stylus" scoped>

// ── Footer shell ──────────────────────────────────────────────────────────────
.footer
  border-top 3px solid cgwiregreen
  background #fff
  font-size 0.875rem
  color darkgrey

// ── Main grid ─────────────────────────────────────────────────────────────────
// Row 1: brand (220px) | company | resources
// Row 2: FAQ spanning all 3 columns
.footer-main
  display grid
  grid-template-columns 2fr 1fr 1fr 1fr
  grid-template-rows auto auto        // ← explicit rows
  column-gap 2rem
  row-gap 0                           // ← kill row gap; let padding handle spacing
  max-width 1100px
  margin 0 auto
  padding 3rem 1.5rem 2rem

  @media (max-width 900px)
    grid-template-columns 1fr 1fr
    column-gap 1.5rem

  @media (max-width 560px)
    grid-template-columns 1fr
    padding 2rem 1.25rem 1.5rem

// ── Brand column ──────────────────────────────────────────────────────────────
.footer-brand
  display flex
  flex-direction column
  gap 1rem

.footer-logo-link
  display inline-block

.footer-logo
  height 36px
  width auto

.footer-mission
  color mediumgrey
  line-height 1.6
  font-size 0.82rem
  margin 0

.footer-social
  display flex
  gap 0.75rem
  margin-top 0.25rem

  a
    color mediumgrey
    display flex
    align-items center
    transition color 0.2s

    &:hover
      color cgwiregreen

// ── Generic column ────────────────────────────────────────────────────────────
.footer-col
  padding-top 0.25rem

// FAQ column — second row, spans full grid width
.footer-col--faq
  grid-column 1 / -1
  grid-row 2                          // ← pin it to row 2 explicitly
  border-top 1px solid bordercolor
  padding-top 1.5rem
  margin-top 2rem

  // Single-column links — no grid layout
  .footer-links
      display flex
      flex-wrap wrap
      gap 0.5rem 2rem

  @media (max-width 560px)
    grid-column 1

// ── Titles ────────────────────────────────────────────────────────────────────
.footer-title
  color cgwiregreen
  font-weight 700
  text-transform uppercase
  letter-spacing 0.06em
  font-size 0.72rem
  margin-bottom 1.25rem
  padding 0

// ── Link lists ────────────────────────────────────────────────────────────────
.footer-links
  list-style none
  margin 0
  padding 0

  li
    margin-bottom 0.65rem

  a
    color darkgrey
    text-decoration none
    transition color 0.15s

    &:hover
      color cgwiregreen
      text-decoration underline

// ── Copyright bar ─────────────────────────────────────────────────────────────
.footer-bottom
  display flex
  align-items center
  justify-content center
  flex-wrap wrap
  gap 0.5rem
  padding 0.85rem 1.5rem
  max-width 100%
  text-align center

  @media (max-width 560px)
    flex-direction column
    align-items flex-start
    padding 0.85rem 1.25rem

.footer-copyright
  margin 0
  color mediumgrey
  font-size 0.78rem
  text-align center

.footer-bottom-links
  display flex
  gap 0.5rem
  align-items center
  font-size 0.78rem

  a
    color mediumgrey
    text-decoration none

    &:hover
      color cgwiregreen
      text-decoration underline

.footer-divider
  color mediumgrey
  user-select none
</style>
