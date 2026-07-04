<template>
  <div class="productions-page">
    <section class="prod-hero">
      <div class="prod-hero-bg" aria-hidden="true">
        <NuxtImg
          v-for="p in heroStills"
          :key="p.picture"
          :src="'/images/productions/' + p.picture + '.png'"
          format="webp"
          width="300"
          alt=""
        />
      </div>
      <div class="prod-hero-inner">
        <span class="prod-eyebrow">{{ $t('productions subtitle') }}</span>
        <h1 class="prod-title">{{ $t('productions title') }}</h1>
      </div>
    </section>

    <section class="prod-wall">
      <a
        v-for="(production, index) in productions"
        :key="index"
        class="prod-card"
        :href="production.url"
        target="_blank"
        rel="noopener"
      >
        <NuxtImg
          :src="'/images/productions/' + production.picture + '.png'"
          :alt="production.title"
          format="webp"
          width="500"
        />
        <span class="prod-card-title">{{ production.title }}</span>
      </a>
    </section>
  </div>

  <Trial />
</template>

<script setup>
import { productions } from '~/data/productions'

const { t } = useI18n()

// A handful of stills power the blurred hero backdrop.
const heroStills = productions.slice(0, 12)

useSEO({
  title: 'CGWire | ' + t('productions title'),
  description: t('productions subtitle')
})
</script>

<style lang="stylus" scoped>
.productions-page
  background #101216
  color #f3f4f6

// --- Hero ---
.prod-hero
  position relative
  overflow hidden
  min-height 300px
  display flex
  align-items center
  justify-content center
  padding 4.5rem 1.5rem

.prod-hero-bg
  position absolute
  inset 0
  display grid
  grid-template-columns repeat(6, 1fr)
  grid-auto-rows 1fr
  transform scale(1.1)
  filter blur(7px) brightness(0.45) saturate(1.15)

  img
    width 100%
    height 100%
    object-fit cover
    display block

.prod-hero::after
  content ''
  position absolute
  inset 0
  background radial-gradient(ellipse at center, rgba(16, 18, 22, 0.5), rgba(16, 18, 22, 0.92))

.prod-hero-inner
  position relative
  z-index 1
  text-align center

.prod-eyebrow
  display block
  text-transform uppercase
  letter-spacing 0.22em
  font-size 0.95rem
  color #9fb4d6
  margin-bottom 0.7rem

.prod-title
  font-size 2.8rem
  font-weight bold
  color white
  margin 0
  line-height 1.1

// --- Poster wall ---
.prod-wall
  display grid
  grid-template-columns repeat(auto-fill, minmax(300px, 1fr))
  gap 0.9rem
  padding 1.75rem
  max-width 1440px
  margin 0 auto

.prod-card
  position relative
  display block
  overflow hidden
  border-radius 12px
  aspect-ratio 460 / 260
  background #1b1e24

  img
    width 100%
    height 100%
    object-fit cover
    display block
    transition transform 0.45s ease

  .prod-card-title
    position absolute
    left 0
    right 0
    bottom 0
    padding 0.7rem 0.9rem
    color white
    font-weight 600
    font-size 0.95rem
    text-align left
    background linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0))
    transform translateY(0.4rem)
    opacity 0
    transition opacity 0.3s ease, transform 0.3s ease

  &:hover
    img
      transform scale(1.08)

    .prod-card-title
      opacity 1
      transform translateY(0)

@media (max-width: 600px)
  .prod-hero
    padding 3rem 1rem

  .prod-title
    font-size 2rem

  .prod-hero-bg
    grid-template-columns repeat(3, 1fr)

  .prod-wall
    grid-template-columns repeat(auto-fill, minmax(150px, 1fr))
    gap 0.5rem
    padding 0.75rem
</style>
