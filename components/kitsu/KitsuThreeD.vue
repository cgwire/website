<template>
  <div class="features">
    <KitsuFeatureBlock feature-key="track" />
    <KitsuFeatureBlock feature-key="review" direction="right" color="purple" />
    <KitsuFeatureBlock feature-key="api" color="blue" />

    <div data-aos="fade-up" class="best-supporter">
      <TextBlock
        :subtitle="$t('kitsu supporter subtitle')"
        :title="$t('kitsu supporter title')"
        :content="$t('kitsu supporter content')"
      />
      <img src="~/assets/images/illustrations/success-supporter.png" />
    </div>

    <KitsuFeatureBlock feature-key="breakdown" />
    <KitsuFeatureBlock feature-key="library" direction="right" color="purple" />
    <KitsuFeatureBlock feature-key="news" color="blue" />
  </div>
</template>

<script></script>

<style scoped lang="scss">
.best-supporter {
  margin-bottom: 8em;
}

.features {
  margin-top: 8em;
}
</style>
