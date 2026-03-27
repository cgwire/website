<template>
  <div class="studios">
    <section class="section">
      <h2>
        <span class="section-subtitle">
          {{ $t('studios subtitle') }}
        </span>
        <span class="section-title">
          {{ $t('studios tagline') }}
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
          {{ $t('studios productions subtitle') }}
        </span>
        <span class="section-title">
          {{ $t('studios productions title') }}
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

usePageHead({
  title: 'CGWire | Kitsu / ' + useI18n().t('studios tagline'),
  titleKey: 'studios subtitle',
  descriptionKey: 'studios tagline',
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
