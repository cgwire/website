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
      <NuxtImg
        class="only-light"
        src="/images/kitsu/gobelins.png"
        alt="Gobelins"
        format="webp"
        loading="lazy"
      />
      <NuxtImg
        class="only-dark"
        src="/images/kitsu/gobelins-dark.png"
        alt="Gobelins"
        format="webp"
        loading="lazy"
      />
      <NuxtImg
        class="only-light"
        src="/images/kitsu/rubika.png"
        alt="Rubika"
        format="webp"
        loading="lazy"
      />
      <NuxtImg
        class="only-dark"
        src="/images/kitsu/rubika-dark.png"
        alt="Rubika"
        format="webp"
        loading="lazy"
      />
      <NuxtImg
        class="only-light"
        src="/images/kitsu/melies.png"
        alt="Méliès"
        format="webp"
        loading="lazy"
      />
      <NuxtImg
        class="only-dark"
        src="/images/kitsu/melies-dark.png"
        alt="Méliès"
        format="webp"
        loading="lazy"
      />
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
