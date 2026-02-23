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
            <NuxtPicture src="/images/kitsu/gobelins.png" format="webp" />
            <NuxtPicture src="/images/kitsu/rubika.png" format="webp" />
            <NuxtPicture src="/images/kitsu/melies.png" format="webp" />
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
