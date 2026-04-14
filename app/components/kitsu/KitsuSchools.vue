<template>
  <KitsuFeatureBlock feature-key="schedule" :feature="features['schedule']" />
  <KitsuFeatureBlock
    feature-key="track"
    direction="right"
    color="purple"
    :feature="features['track']"
  />
  <KitsuFeatureBlock
    feature-key="review"
    color="blue"
    :feature="features['review']"
  />

  <div data-aos="fade-up" class="best-supporter">
    <TextBlock
      :subtitle="supporters.subtitle"
      :title="supporters.title"
      :content="supporters.schools"
    />

    <div class="successes">
      <NuxtImg src="/images/kitsu/gobelins.png" format="webp" />
      <NuxtImg src="/images/kitsu/rubika.png" format="webp" />
      <NuxtImg src="/images/kitsu/melies.png" format="webp" />
    </div>
  </div>

  <KitsuFeatureBlock feature-key="breakdown" :feature="features['breakdown']" />
  <KitsuFeatureBlock
    feature-key="news"
    direction="right"
    color="purple"
    :feature="features['news']"
  />
  <KitsuFeatureBlock
    feature-key="api"
    color="blue"
    :feature="features['api']"
  />
</template>

<script setup>
const props = defineProps({
  features: Object,
  supporters: Object
})

const features = props.features
const supporters = props.supporters
</script>

<style scoped lang="stylus">
body .successes
  img
    padding: 0
    border-radius: 30px
</style>
