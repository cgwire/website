<template>
<div class="kitsu-page content">

      <div class="kitsu-header flexrow">
        <div class="main-title">
          <span>{{ $t('kitsu title') }}</span>
          <div class="kitsu-explanation">
            {{ $t('kitsu description') }}
          </div>
        </div>
        </div>
 
  <div class="kitsu-header-wrapper">
    <section>
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
        Fullfill your ambitions
      </div>

      <h2 class="section-title has-text-centered">
        Kitus is the biggest supporter of your success
      </h2>
      <div class="section-explanation">
        Productions tracked with Kitsu won all the major awards:
        Oscars, Emmys, Cannes Palme d'Or, Annecy Cristal, César, and more.
      </div>
      <img src="~/assets/images/illustrations/success-supporter.png" />
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


    <div class="mt4 mb1" data-aos="fade-up">
      <div class="flexrow stories">
        <CustomerStorySmallBlock
          studio-name="Miyu studio"
          story-key="miyu"
          image-path="photo-customer-story-miyu.png"
          interviewee="Carole Faure, Production Manager"
          story-url="https://blog.cg-wire.com/customer-story-miyu-studio/"
        />

        <CustomerStorySmallBlock
          studio-name="Fost studio"
          story-key="fost"
          image-path="photo-customer-story-fost.png"
          interviewee="Céline Durieux, Head Of Studio"
          story-url="https://blog.cg-wire.com/customer-story-fost-studio/"
        />
      </div>
    </div>
    <div class="mt1 mb4" data-aos="fade-up">
      <div class="flexrow stories">
        <CustomerStorySmallBlock
          class="customer-story mb1"
          studio-name="Autour De Minuit"
          story-key="adm"
          interviewee="Fiona Cohen, Production Manager"
          image-path="photo-customer-story-adm.jpg"
          story-url="https://blog.cg-wire.com/customer-story-autour-de-minuit/"
        />

        <CustomerStorySmallBlock
          class="customer-story"
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

<Trial class="mt4" :is-big="true" />
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
  background-image url('~/assets/images/illustrations/kitsu-header.png')
  background-size 100%
  background-position: 0px 0px
  height 600px
  background-repeat: no-repeat
  padding-bottom 3em
  padding-top 3em

.stories
  justify-content center

.content .kitsu-header.flexrow
    max-width 1000px
    margin auto
    margin-bottom 3em
    margin-top 2em
    align-items center

    .kitsu-explanation
        font-size 1.2em
        margin-top 0.5em

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

.kitsu-header.flexrow
  padding: 2em
  margin: auto
  text-align center
  margin-bottom: 10em

.main-title
  margin-top 4em


div.body
  @media(max-width: 1200px)
    .kitsu-header-wrapper
      height 500px

  @media(max-width: 500px)
    .kitsu-header-wrapper
      height 300px

  @media(max-width: 600px)
    .kitsu-header-wrapper
      height 400px

  @media(max-width: 800px)
    section
      padding 1em

    .kitsu-header-wrapper
      background-size 200%
      background-position: 80%

    .kitsu-header.flexrow
      flex-direction column

      .main-title
        padding 2em

    .modules
      .small-block
        margin-bottom 1em

    .stories
        flex-direction column

        section.customer-story
            margin 0 1em 1em 1em
</style>
