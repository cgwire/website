<template>
<div class="kitsu-page content">

  <div class="kitsu-header-wrapper">
    <section>
      <div class="kitsu-header flexrow">
        <div class="flexcolum flexrow-item logo-wrapper mr2">
          <img class="logo" src="~/assets/images/logo-kitsu.png" />
          <h2 class="logo-name">Kitsu</h2>
        </div>
        <div class="main-title">
          <span>{{ $t('kitsu title') }}</span>
          <div class="kitsu-explanation">
            {{ $t('kitsu description') }}
          </div>
        </div>
      </div>
    </section>
  </div>

  <section>
    <div class="section-subtitle has-text-centered">
      {{ $t('kitsu modules subtitle') }}
    </div>
    <h2 class="section-title has-text-centered">
      {{ $t('kitsu modules title') }}
    </h2>
    <div class="section-explanation">
      {{ $t('kitsu modules description') }}
    </div>

    <div class="flex" data-aos="fade-up">
      <div class="modules flexrow">
        <ModuleBlock
          section-key="team-collaboration"
          feature1-key="tasks"
          feature2-key="todos"
          feature3-key="news"
        />
        <ModuleBlock
          section-key="production-tracker"
          feature1-key="report"
          feature2-key="schedule"
          feature3-key="quotas"
        />
        <ModuleBlock
          section-key="review-engine"
          feature1-key="playlists"
          feature2-key="compare"
          feature3-key="room"
        />
      </div>
    </div>

    <div class="flex" data-aos="fade-up">
      <div class="modules flexrow has-text-left mt0">
        <ModuleBlock
          section-key="casting-management"
          feature1-key="tables"
          feature2-key="asset-links"
          feature3-key="export"
        />
        <ModuleBlock
          section-key="studio-database"
          feature1-key="api"
          feature2-key="boost"
          feature3-key="python"
        />
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="section-subtitle has-text-centered">
        {{ $t('kitsu services subtitle') }}
      </div>
      <h2 class="section-title has-text-centered">
        {{ $t('kitsu services title') }}
      </h2>
      <div class="section-explanation">
        {{ $t('kitsu services description') }}
      </div>
    </div>

    <div class="flex" data-aos="fade-up">
      <div class="modules flexrow">
        <ModuleBlock
          section-key="top-notch-support"
          feature1-key="fast"
          feature2-key="chat"
          feature3-key="experts"
        />
        <ModuleBlock
          section-key="elite-hosting"
          feature1-key="security"
          feature2-key="availability"
          feature3-key="performance"
        />
        <ModuleBlock
          section-key="tailor-made-architecture"
          feature1-key="onpremise"
          feature2-key="multiinstance"
          feature3-key="extra"
        />
      </div>
    </div>

    <div data-aos="fade-up">
      <div class="section-subtitle has-text-centered">
        {{ $t('kitsu stories subtitle') }}
      </div>
      <h2 class="section-title has-text-centered">
        {{ $t('kitsu stories title') }}
      </h2>
      <div class="section-explanation">
        {{ $t('kitsu stories description') }}
      </div>
    </div>

    <div class="flex" data-aos="fade-up">
      <div class="modules">
        <CustomerStorySmallBlock
          studio-name="Miyu studio"
          story-key="miyu"
          image-path="photo-customer-story-miyu.png"
          story-url="https://blog.cg-wire.com/customer-story-miyu-studio/"
        />

        <CustomerStorySmallBlock
          studio-name="Fost studio"
          story-key="fost"
          image-path="photo-customer-story-fost.png"
          story-url="https://blog.cg-wire.com/customer-story-fost-studio/"
        />

        <CustomerStorySmallBlock
          studio-name="Autour De Minuit"
          story-key="adm"
          interviewee="Fiona Cohen, Production Manager"
          image-path="photo-customer-story-adm.jpg"
          story-url="https://blog.cg-wire.com/customer-story-autour-de-minuit/"
        />

        <CustomerStorySmallBlock
          studio-name="Makuta VFX"
          story-key="makuta"
          interviewee="Pete Draper, Head of VFX"
          image-path="photo-customer-story-makuta.png"
          story-url="https://blog.cg-wire.com/customer-story-makuta-vfx-studio/"
        />
      </div>
    </div>
  </section>
</div>
<Trial />
</template>

<script setup>
const name = 'Kitsu'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu',
  meta: buildPageMeta(
    t,
    'kitsu title',
    'kitsu description',
    'kitsu',
    'teaser.d579992c.png'
  )
})
</script>

<style lang="stylus" scoped>
.content
    section
        margin auto
        max-width 1000px

        div.section-subtitle
            margin-top 5em

        h2.section-title
            margin-top 0.5em

    .section-explanation
        margin auto
        margin-bottom 3em
        max-width 800px
        text-align center

.kitsu-page
  padding-top 0

.kitsu-header-wrapper
  border-radius 0px 0px 400px 400px / 25px 25px 25px 25px
  box-shadow 2px 2px 8px rgba(0, 0, 0, 0.1)
  background linear-gradient(0deg, rgba(249,246,253,1) 35%, rgba(244,248,255,1) 100%)
  padding-bottom 3em
  padding-top 3em

.kitsu-header.flexrow
    max-width 800px
    margin auto
    margin-bottom 2em
    margin-top 6em
    align-items center

    .kitsu-explanation
        font-size 1.2em

    span
        flex 1
        font-size 3em
        font-weight bold
        line-height 1.2em
        margin-bottom 1em

    .logo-wrapper
        min-width 150px
        margin-right 2em
        .logo
            width 200px

        h2.logo-name
          font-size 2em
          font-weight bold
          text-align center
          text-transform uppercase
          margin-top 0.5em


.slogan
    max-width 700px
    font-size 4.5em
    font-weight bold
    line-height 1.2em
    text-transform uppercase
    text-align center
    margin auto
    margin-top 2em
    margin-bottom 2em

.modules
    display inline-flex
    margin-bottom 10px

    &.2-modules
        margin auto
        text-align center
        margin-bottom 10px

@media(max-width: 800px)
  section
    padding 1em

  .kitsu-header.flexrow
    flex-direction column

    .main-title
      padding 2em

  .modules
    .small-block
      margin-bottom 1em
</style>
