<template>
  <div class="productions-page">
    <section class="prod-hero">
      <span class="prod-eyebrow">{{ $t('productions subtitle') }}</span>
      <h1 class="prod-title">{{ $t('productions title') }}</h1>
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
          :src="'/images/productions/' + production.picture + '.jpg'"
          :alt="production.title"
          format="webp"
          width="900"
          loading="lazy"
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

useSEO({
  title: 'CGWire | ' + t('productions title'),
  description: t('productions subtitle')
})
</script>

<style lang="stylus" scoped>
.productions-page
  background #ffffff
  color #1b1e24

// --- Hero ---
.prod-hero
  text-align center
  padding 4.5rem 1.5rem 2.5rem

.prod-eyebrow
  display block
  text-transform uppercase
  letter-spacing 0.22em
  font-size 0.95rem
  color #54656f
  margin-bottom 0.7rem

.prod-title
  font-size 2.8rem
  font-weight bold
  color #14161a
  margin 0
  line-height 1.1

// --- Poster wall ---
.prod-wall
  display grid
  grid-template-columns repeat(auto-fill, minmax(400px, 1fr))
  gap 1.1rem
  padding 1.75rem
  max-width 1500px
  margin 0 auto

.prod-card
  position relative
  display block
  overflow hidden
  border-radius 14px
  aspect-ratio 460 / 260
  background #e9ecf1
  box-shadow 0 1px 4px rgba(0, 0, 0, 0.08)

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
    padding 0.8rem 1rem
    color white
    font-weight 600
    font-size 1rem
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
    padding 3rem 1rem 1.5rem

  .prod-title
    font-size 2rem

  .prod-wall
    grid-template-columns repeat(auto-fill, minmax(170px, 1fr))
    gap 0.6rem
    padding 0.75rem
</style>
