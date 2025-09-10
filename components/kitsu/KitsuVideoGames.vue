<template>
  <KitsuFeatureBlock feature-key="assets" />
  <KitsuFeatureBlock
    feature-key="review-assets"
    direction="right"
    color="purple"
  />
  <KitsuFeatureBlock feature-key="library" color="blue" />

  <TextBlock
    :subtitle="$t('kitsu supporter subtitle')"
    :title="$t('kitsu supporter title')"
    :content="$t('kitsu supporter games')"
  />
  <div class="successes">
    <img src="~/assets/images/kitsu/brawl-stars.png" />
    <img src="~/assets/images/kitsu/merge-mansion.png" />
    <img src="~/assets/images/kitsu/cuphead.png" />
  </div>

  <KitsuFeatureBlock feature-key="search" />
  <KitsuFeatureBlock feature-key="news" direction="right" color="purple" />
  <KitsuFeatureBlock feature-key="api" color="blue" />
</template>

<script></script>

<style lang="scss" scoped>
body .successes {
  img {
    padding: 0;
    border-radius: 30px;
  }
}
</style>
