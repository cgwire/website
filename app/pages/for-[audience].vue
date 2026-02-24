<template>
    <div v-if="audience">
        <section class="section content use-case">
            <h2>
                <span class="section-subtitle">
                    {{ t(audience.hero.subtitleKey) }}
                </span>
                <span class="section-title">
                    {{ t(audience.hero.titleKey) }}
                </span>
            </h2>

            <div
                class="js-tabs"
                data-existing-hx="h3"
                data-tabs-prefix-class="example-tabs"
            >
                <ul class="js-tablist">
                    <li
                        v-for="item in audience.panels"
                        :key="item.id"
                        class="js-tablist__item"
                    >
                        <a
                            class="js-tablist__link"
                            :aria-selected="panel === item.id"
                            @click="selectPanel(item.id)"
                        >
                            <!-- <NuxtPicture
                                :src="`/images/avatars/${item.avatar}`"
                                alt=""
                            /> -->
                            {{ t(item.titleKey) }}
                        </a>
                    </li>
                </ul>

                <div v-for="tab in audience.panels" :key="tab.id">
                    <div class="js-tabcontent" v-if="panel === tab.id">
                        <h3>{{ t(tab.titleKey) }}</h3>

                        <p v-for="desc in tab.descriptionKeys" :key="desc">
                            {{ t(desc) }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="quote">
            <section>
                <blockquote class="quote-text">
                    <p>
                        {{ t(audience.quote.textKey) }}
                    </p>
                    <footer class="quote-author">
                        <!-- <NuxtPicture
                            class="quote-avatar"
                            :src="
                                '/images/testimonials/' + audience.quote.avatar
                            "
                        /> -->
                        {{ t(audience.quote.authorKey) }}
                    </footer>
                </blockquote>
            </section>
        </div>

        <section class="section">
            <h2 class="title">
                {{ t(audience.reasons.titleKey) }}
            </h2>

            <ul class="check-list">
                <li v-for="reason in audience.reasons.items" :key="reason">
                    {{ t(reason) }}
                </li>
            </ul>

            <p>
                <a
                    class="button button--alt is-large"
                    :href="audience.reasons.ctaUrl"
                >
                    {{ t(audience.reasons.ctaKey) }}
                </a>
            </p>
        </section>

        <section class="section">
            <ul class="customers">
                <CustomerLogoBlock
                    v-for="studio in audience.studios"
                    :key="studio.elementKey"
                    :name="studio.name"
                    :element-key="studio.elementKey"
                    :link="studio.link"
                />
            </ul>
        </section>

        <div class="video">
            <section class="section">
                <div class="flexrow">
                    <div class="flex-item">
                        <iframe
                            :src="`https://player.vimeo.com/video/${audience.video.vimeoId}`"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                            v-if="audience.video.vimeoId"
                        />
                        <iframe
                            style="border-radius: 20px"
                            width="640"
                            height="480"
                            :src="`https://www.youtube.com/embed/${audience.video.youtubeId}`"
                            title="YouTube video player"
                            frameborder="0"
                            allow="
                                accelerometer;
                                autoplay;
                                clipboard-write;
                                encrypted-media;
                                gyroscope;
                                picture-in-picture;
                                web-share;
                            "
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                            v-else
                        />
                    </div>

                    <div class="flex-item video-text">
                        <p>
                            {{ t("usecase demo") }}
                            <a :href="audience.video.partnerUrl">
                                {{ audience.video.partnerName }}
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>

        <Trial />
    </div>
</template>

<script setup>
const route = useRoute();
const { t, locale } = useI18n();

const slug = `for-${route.params.audience}`;

const { data } = await useAsyncData(() =>
    queryCollection("pages").path(`/pages/audiences/${slug}`).first(),
);
const audience = data.value.meta;

useHead(() => ({
    title: `CGWire | Kitsu / ${t(audience.i18n.titleKey)}`,
    meta: buildPageMeta(
        t,
        audience.i18n.metaTitleKey,
        audience.i18n.metaDescriptionKey,
        route.params.audience,
    ),
}));

const panel = ref(null);

watchEffect(() => {
    if (audience.panels?.length) {
        panel.value = audience.panels[0].id;
    }
});

function selectPanel(section) {
    panel.value = section;
}
</script>
