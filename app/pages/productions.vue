<template>
  <div class="studios">
    <section class="section productions has-text-centered">
      <img class="section-icon" src="/icons/productions.svg" alt="" />
      <h2>
        <span class="section-subtitle">
          {{ $t('productions subtitle') }}
        </span>
        <span class="section-title">
          {{ $t('productions title') }}
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

const { t } = useI18n()

useSEO({
  title: 'CGWire | ' + t('productions title'),
  description: t('productions subtitle')
})
</script>

<style lang="stylus" scoped>
.section-icon
  display block
  width 64px
  height 64px
  margin 0 auto 0.75em
</style>
