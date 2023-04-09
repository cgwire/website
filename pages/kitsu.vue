<template>
<div class="kitsu-page content">

  <section>
    <div class="kitsu-header flexrow">
      <img class="logo flexrow-item" src="~/assets/images/logo-kitsu.svg" />
      <div>
        <span>Kitsu</span>
        <div class="kitsu-explanation">
          Kitsu is a collaboration platform for Animation and VFX studios. With it,
          you deliver better content faster.
        </div>
      </div>
    </div>


    <div class="section-subtitle has-text-centered">
      Designed with on the ground use-cases in mind
    </div>
    <h2 class="section-title has-text-centered">
      5 modules as pillars of your productions
    </h2>

    <p>
      Kitsu is made of 5 modules that will help you to manage your productions
      efficiently.

      These six parts are the result of continuous iterations with hundreds of
      studios. See below all our modules:
    </p>
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

    <div class="modules flexrow">
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

    <div class="section-subtitle has-text-centered">
      An outstanding user experierce
    </div>
    <h2 class="section-title has-text-centered">
      Strong services to support your production
    </h2>

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

  </section>
</div>
<Trial />
</template>

<script setup>
const name = 'Kitsu'
const { t } = useI18n()
useHead({
  title: 'CGWire | Kitsu',
  meta: [
    { name: 'description', content: t('kitsu header explanation')}
  ]
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
            margin-bottom 1em

.kitsu-header
    max-width 700px
    margin auto
    margin-bottom 2em
    margin-top 6em
    align-items center

    .logo
        width 200px

    .kitsu-explanation
        font-size 1.2em

    span
        flex 1
        font-size 4em
        font-weight bold
        text-transform uppercase

</style>
