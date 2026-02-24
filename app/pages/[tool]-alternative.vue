<template>
    <div v-if="comparison" class="compare-page">
        <section class="section content narrower">
            <div>
                <!-- <NuxtPicture
                    :src="'/images/illustrations/' + comparison.image"
                    :alt="`Kitsu vs ${comparison.tool}`"
                /> -->
            </div>

            <div class="section-subtitle has-text-centered mt2">
                {{ t(comparison.i18n.subtitleKey) }}
            </div>

            <h2 class="section-title has-text-centered">
                {{ t(comparison.i18n.titleKey) }}
            </h2>

            <div
                v-for="(section, index) in comparison.sections"
                :key="index"
                class="section"
            >
                <h3>{{ section.title }}</h3>

                <p v-for="(paragraph, pIndex) in section.content" :key="pIndex">
                    {{ paragraph }}
                </p>
            </div>
        </section>
    </div>

    <Trial />
</template>

<script setup>
const route = useRoute();
const { t } = useI18n();

const slug = `${route.params.tool}-alternative`;

const { data } = await useAsyncData(() =>
    queryCollection("pages").path(`/pages/alternatives/${slug}`).first(),
);

const comparison = data.value.meta;

useHead({
    title: `CGWire | Kitsu vs ${comparison.tool}`,
    meta: buildPageMeta(
        t,
        comparison.i18n.titleKey,
        comparison.i18n.subtitleKey,
        slug,
        comparison.image,
    ),
});
</script>
