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
      <img src="~/assets/images/kitsu/les-trois-mousquetaires.png" />
      <img src="~/assets/images/kitsu/rrr.png" />
      <img src="~/assets/images/kitsu/substance.png" />
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

<style lang="scss" scoped>
</style>
