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
      <NuxtImg
        src="/images/kitsu/les-trois-mousquetaires.png"
        alt="Les Trois Mousquetaires"
        format="webp"
        loading="lazy"
      />
      <NuxtImg
        src="/images/kitsu/rrr.png"
        alt="RRR"
        format="webp"
        loading="lazy"
      />
      <NuxtImg
        src="/images/kitsu/evil-dead-burn.png"
        alt="Evil Dead Burn"
        format="webp"
        loading="lazy"
      />
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
defineProps({
  features: Object,
  supporters: Object
})
</script>

<style lang="stylus" scoped></style>
