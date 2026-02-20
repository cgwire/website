<template>
<div class="kitsu-page customer-stories">

  <div class="section-title has-text-centered mt4 mb4">
    {{ $t('header title customer-stories') }}
  </div>

  <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
    TV Series (2D)
  </div>

  <CustomerStoryBlock
    studio-name="Tant Mieux Prod"
    story-key="tant-mieux"
    interviewee="Tristan Mercier, Production Director"
    image-path="photo-customer-story-tant-mieux.png"
    story-url="https://blog.cg-wire.com/customer-story-tant-mieux-prod/"
  />

  <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
    Feature Films, Shorts (2D)
  </div>

  <CustomerStoryBlock
    studio-name="Miyu studio"
    story-key="miyu"
    interviewee="Carole Faure, Production Manager"
    image-path="photo-customer-story-miyu.png"
    story-url="https://blog.cg-wire.com/customer-story-miyu-studio/"
  />

  <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
    TV Series (2D)
  </div>

  <CustomerStoryBlock
    studio-name="Fost studio"
    story-key="fost"
    interviewee="Céline Durieux, Head Of Studio"
    image-path="photo-customer-story-fost.png"
    story-url="https://blog.cg-wire.com/customer-story-fost-studio/"
  />

  <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
    TV Series, Feature Films (2D, 3D)
  </div>

  <CustomerStoryBlock
    studio-name="Autour De Minuit"
    story-key="adm"
    interviewee="Fiona Cohen, Production Manager"
    image-path="photo-customer-story-adm.jpg"
    story-url="https://blog.cg-wire.com/customer-story-autour-de-minuit/"
  />

  <div class="section-subtitle has-text-centered mt4" data-aos="fade-up">
    Feature Fims (VFX)
  </div>

  <CustomerStoryBlock
    studio-name="Makuta VFX (RRR Movie)"
    story-key="makuta"
    interviewee="Pete Draper, Head of VFX"
    image-path="photo-customer-story-makuta.png"
    story-url="https://blog.cg-wire.com/customer-story-makuta-vfx-studio/"
  />

  <Trial />
</div>
</template>

<script setup>
const name = 'Customer Stories'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu / ' + t('header title customer-stories'),
  meta: buildPageMeta(
    t,
    'header title customer-stories',
    'Feature Films, TV Series, VFX Studios',
    'customer-stories',
    'photo-customer-story-fost.801872d5.png'
  )
})
</script>

<style lang="stylus" scoped>
.subtitle
  font-size 2em
  font-weight bold
  margin-bottom 0
  position relative
  top 40px
</style>
