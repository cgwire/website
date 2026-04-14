<template>
  <KitsuFeatureBlock feature-key="schedule" :feature="features['schedule']" />
  <KitsuFeatureBlock
    feature-key="forecast"
    direction="right"
    color="purple"
    :feature="features['forecast']"
  />
  <KitsuFeatureBlock
    feature-key="track"
    color="blue"
    :feature="features['track']"
  />

  <div data-aos="fade-up" class="best-supporter">
    <TextBlock
      :subtitle="supporters.subtitle"
      :title="supporters.title"
      :content="supporters.vfx"
    />
    <div class="successes">
      <NuxtImg src="/images/kitsu/les-trois-mousquetaires.png" format="webp" />
      <NuxtImg src="/images/kitsu/rrr.png" format="webp" />
      <NuxtImg src="/images/kitsu/substance.png" format="webp" />
    </div>
  </div>

  <KitsuFeatureBlock feature-key="review" :feature="features['review']" />
  <KitsuFeatureBlock
    feature-key="timesheets"
    direction="right"
    color="purple"
    :feature="features['timesheets']"
  />
  <KitsuFeatureBlock
    feature-key="news"
    color="blue"
    :feature="features['news']"
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

<style lang="stylus" scoped></style>
