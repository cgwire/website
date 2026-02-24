<template>
    <div v-if="page" class="compare-page">
        <section class="section content narrower">
            <div>
                <!-- <NuxtPicture
                    :src="'/images/illustrations/' + comparison.image"
                    :alt="`Kitsu vs ${comparison.tool}`"
                /> -->
            </div>

            <div class="section-subtitle has-text-centered mt2">
                {{ t(page.subtitleKey) }}
            </div>

            <h2 class="section-title has-text-centered">
                {{ t(page.titleKey) }}
            </h2>

            <div
                v-for="(section, index) in page.sections"
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

const slug = route.params.slug;

const { data } = await useAsyncData(() =>
    queryCollection("pages").path(`/pages/faq/${slug}`).first(),
);

const page = data.value.meta;

useHead({
    title: `CGWire | ${page.pageTitle}`,
    meta: buildPageMeta(t, page.titleKey, page.subtitleKey, `/faq/${slug}`),
});
</script>
