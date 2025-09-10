<template>
  <KitsuFeatureBlock feature-key="schedule" />
  <KitsuFeatureBlock feature-key="track" direction="right" color="purple" />
  <KitsuFeatureBlock feature-key="review" color="blue" />

  <div data-aos="fade-up" class="best-supporter">
    <TextBlock
      :subtitle="$t('kitsu supporter subtitle')"
      :title="$t('kitsu supporter title')"
      :content="$t('kitsu supporter schools')"
    />

    <div class="successes">
      <img src="~/assets/images/kitsu/gobelins.png" />
      <img src="~/assets/images/kitsu/rubika.png" />
      <img src="~/assets/images/kitsu/melies.png" />
    </div>
  </div>

  <KitsuFeatureBlock feature-key="breakdown" />
  <KitsuFeatureBlock feature-key="news" direction="right" color="purple" />
  <KitsuFeatureBlock feature-key="api" color="blue" />
</template>

<script></script>

<style scoped lang="scss">
body .successes {
  img {
    padding: 0;
    border-radius: 30px;
  }
}
</style>
