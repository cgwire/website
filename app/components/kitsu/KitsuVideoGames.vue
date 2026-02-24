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
        <NuxtPicture src="/images/kitsu/brawl-stars.png" format="webp" />
        <NuxtPicture src="/images/kitsu/merge-mansion.png" format="webp" />
        <NuxtPicture src="/images/kitsu/cuphead.png" format="webp" />
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
