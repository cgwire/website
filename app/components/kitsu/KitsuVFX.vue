<template>
  <KitsuFeatureBlock feature-key="schedule" />
  <KitsuFeatureBlock feature-key="forecast" direction="right" color="purple" />
  <KitsuFeatureBlock feature-key="track" color="blue" />

  <div data-aos="fade-up" class="best-supporter">
    <TextBlock
      :subtitle="$t('kitsu supporter subtitle')"
      :title="$t('kitsu supporter title')"
      :content="$t('kitsu supporter vfx')"
    />
    <div class="successes">
      <NuxtImg src="/images/kitsu/les-trois-mousquetaires.png" format="webp" />
      <NuxtImg src="/images/kitsu/rrr.png" format="webp" />
      <NuxtImg src="/images/kitsu/substance.png" format="webp" />
    </div>
  </div>

  <KitsuFeatureBlock feature-key="review" />
  <KitsuFeatureBlock
    feature-key="timesheets"
    direction="right"
    color="purple"
  />
  <KitsuFeatureBlock feature-key="news" color="blue" />
</template>

<script></script>

<style lang="stylus" scoped></style>
