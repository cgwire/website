<template>
  <div class="features">
    <KitsuFeatureBlock feature-key="track" :feature="features['track']" />
    <KitsuFeatureBlock
      feature-key="review"
      direction="right"
      color="purple"
      :feature="features['review']"
    />
    <KitsuFeatureBlock
      feature-key="api"
      color="blue"
      :feature="features['api']"
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
      feature-key="library"
      direction="right"
      color="purple"
      :feature="features['library']"
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

<style scoped lang="stylus">
.best-supporter
  margin-bottom: 8em

.features
  margin-top: 8em
</style>
