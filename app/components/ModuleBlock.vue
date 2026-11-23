<template>
  <nuxt-link class="module-block" :to="$localePath(sectionKey)">
    <div class="has-text-centered">
      <NuxtImg
        :src="'/images/illustrations/' + sectionKey + '.png'"
        alt=""
        format="webp"
      />
    </div>
    <h3>
      {{ $t(`${sectionKey}.header.tagline`) }}
    </h3>
    <ul>
      <li
        v-for="featureKey in [feature1Key, feature2Key, feature3Key]"
        :key="featureKey"
        class="module-description"
      >
        {{ $t(`${sectionKey}.${featureKey}.title`) }}
      </li>
    </ul>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  sectionKey: String,
  feature1Key: String,
  feature2Key: String,
  feature3Key: String
})
</script>

<style lang="stylus" scoped>
ul
  margin-left 0em
  list-style none

li
  padding-left 1.3em
  position relative

li:before
  color cgwiregreen
  content '✓'
  font-weight bold
  left 0
  position absolute

.module-block h3
  font-size 1.3rem
  margin-top 0.5em
</style>
