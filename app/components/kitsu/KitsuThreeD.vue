<template>
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
      class="only-light"
      src="/images/illustrations/success-supporter.png"
      alt=""
      format="webp"
      loading="lazy"
    />
    <NuxtImg
      class="only-dark"
      src="/images/illustrations/success-supporter-dark.png"
      alt=""
      format="webp"
      loading="lazy"
    />
  </div>

  <KitsuFeatureBlock feature-key="breakdown" :feature="features['breakdown']" />
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
</template>

<script setup>
defineProps({
  features: Object,
  supporters: Object
})
</script>

<style scoped lang="stylus">
.best-supporter
  margin-bottom: 8em
</style>
