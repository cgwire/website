<template>
  <div class="studios">
    <section class="section productions has-text-centered">
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
