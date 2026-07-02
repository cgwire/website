<template>
  <section
    :class="{
      'block-colored': feature.colored,
      gradient: feature.gradient === true,
      [`gradient-${gradientStep}`]: gradientStep,
      block: !feature.colored,
      'has-bg-image': feature.image
    }"
  >
     <ClientOnly fallback-tag="span">   

      <ImageScene class="bg-image" :src="'/images/screenshots/' + feature.image" />

      <template #fallback>
        <NuxtImg
        v-if="feature.image"
        class="bg-image"
        :src="'/images/screenshots/' + feature.image"
        format="webp"
        />
      </template>
    </ClientOnly>

    <section class="section content-layer">
      <div
        :class="{
          tile: true,
          'flex-aic': true,
          content: !feature.reverted,
          'content-reverse': feature.reverted
        }"
      >
        <div class="tile is-5 is-child content" data-aos="fade-up">
          <h2>
            <span class="section-subtitle">
              {{ feature.subtitle }}
            </span>
            <span class="section-title">
              {{ feature.title }}
            </span>
          </h2>
          <p>
            {{ feature.content }}
          </p>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  feature: Object
})

const feature = props.feature

const gradientStep = computed(() => {
  if (typeof feature.gradient === 'number') return feature.gradient
  return null
})
</script>

<style lang="stylus" scoped>
section
  position relative
  overflow hidden

.bg-image
  position absolute
  inset 0
  width 100%
  height 100%
  object-fit cover
  z-index 0

.content-layer
  position relative
  z-index 1

.screenshot
  border-radius 10px
</style>