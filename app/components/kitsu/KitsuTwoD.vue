<template>
  <div class="features">
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
        :content="supporters.content"
      />
      <NuxtImg
        src="/images/illustrations/success-supporter.png"
        format="webp"
      />
    </div>

    <KitsuFeatureBlock
      feature-key="breakdown"
      :feature="features['breakdown']"
    />
    <KitsuFeatureBlock
      feature-key="report"
      direction="right"
      color="purple"
      :feature="features['report']"
    />
    <KitsuFeatureBlock
      feature-key="news"
      color="blue"
      :feature="features['news']"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  features: Object,
  supporters: Object
})

const features = props.features
const supporters = props.supporters
</script>

<style lang="stylus" scoped>
.best-supporter
  margin-bottom: 8em

.features
  margin-top: 8em
</style>
