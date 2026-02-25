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

            <ContentRenderer :value="content" class="section" />
        </section>
    </div>

    <Trial />
</template>

<script setup>
const route = useRoute();
const { t } = useI18n();

const props = defineProps({
    slug: {
        type: String,
        required: true,
    },
});

const slug = props.slug;

const { data } = await useAsyncData(slug, () =>
    queryCollection("pages").path(`/pages/faq/${slug}`).first(),
);

const page = data.value.meta;
const content = data.value;

useHead({
    title: `CGWire | ${page.pageTitle}`,
    meta: buildPageMeta(t, page.titleKey, page.subtitleKey, `/faq/${slug}`),
});
</script>
