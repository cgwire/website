<template>
  <KitsuFeatureBlock feature-key="assets" :feature="features['assets']" />
  <KitsuFeatureBlock
    feature-key="review-assets"
    direction="right"
    color="purple"
    :feature="features['review-assets']"
  />
  <KitsuFeatureBlock
    feature-key="library"
    color="blue"
    :feature="features['library']"
  />

  <TextBlock
    :subtitle="supporters.subtitle"
    :title="supporters.title"
    :content="supporters.games"
  />
  <div class="successes">
    <NuxtImg
      src="/images/kitsu/mdhr.png"
      alt="Studio MDHR"
      format="webp"
      loading="lazy"
    />
    <NuxtImg
      src="/images/kitsu/bloober.png"
      alt="Bloober Team"
      format="webp"
      loading="lazy"
    />
    <NuxtImg
      src="/images/kitsu/sparx.png"
      alt="Virtuos Sparx"
      format="webp"
      loading="lazy"
    />
  </div>

  <KitsuFeatureBlock feature-key="search" :feature="features['search']" />
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


<style lang="stylus" scoped>
body .successes
  img
    box-shadow none
</style>
