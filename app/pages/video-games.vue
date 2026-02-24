<template>
    <section class="section content use-case">
        <h2>
            <span class="section-subtitle">
                {{ $t("video-games subtitle") }}
            </span>
            <span class="section-title">
                {{ $t("video-games title") }}
            </span>
        </h2>
        <div
            class="js-tabs"
            data-existing-hx="h3"
            data-tabs-prefix-class="example-tabs"
        >
            <ul class="js-tablist">
                <li class="js-tablist__item">
                    <a
                        class="js-tablist__link"
                        :aria-selected="panel === 'supervisor'"
                        @click="() => selectPanel('supervisor')"
                    >
                        <NuxtPicture
                            src="/images/avatars/avatar-2.svg"
                            alt=""
                        />
                        {{ $t("video-games people title 2") }}
                    </a>
                </li>
                <li class="js-tablist__item">
                    <a
                        class="js-tablist__link"
                        :aria-selected="panel === 'artist'"
                        @click="() => selectPanel('artist')"
                    >
                        <NuxtPicture
                            src="/images/avatars/avatar-3.svg"
                            alt=""
                        />
                        {{ $t("video-games people title 3") }}
                    </a>
                </li>
                <li class="js-tablist__item">
                    <a
                        class="js-tablist__link"
                        :aria-selected="panel === 'productionmanager'"
                        @click="() => selectPanel('productionmanager')"
                    >
                        <NuxtPicture
                            src="/images/avatars/avatar-1.svg"
                            alt=""
                        />
                        {{ $t("video-games people title 1") }}
                    </a>
                </li>
            </ul>
            <div id="artist" class="js-tabcontent" v-if="panel === 'artist'">
                <h3>
                    {{ $t("video-games people title 3") }}
                </h3>
                <p>
                    {{ $t("video-games people desc 3-1") }}
                </p>
                <p>
                    {{ $t("video-games people desc 3-2") }}
                </p>
                <p>
                    {{ $t("video-games people desc 3-3") }}
                </p>
                <p>
                    {{ $t("video-games people desc 3-4") }}
                </p>
                <p>
                    {{ $t("video-games people desc 3-5") }}
                </p>
            </div>
            <div
                id="productionmanager"
                class="js-tabcontent"
                v-if="panel === 'productionmanager'"
            >
                <h3>
                    {{ $t("video-games people title 1") }}
                </h3>
                <p>
                    {{ $t("video-games people desc 1-1") }}
                </p>
                <p>
                    {{ $t("video-games people desc 1-2") }}
                </p>
                <p>
                    {{ $t("video-games people desc 1-3") }}
                </p>
            </div>
            <div
                id="supervisor"
                class="js-tabcontent"
                v-if="panel === 'supervisor'"
            >
                <h3>
                    {{ $t("video-games people title 2") }}
                </h3>
                <p>
                    {{ $t("video-games people desc 2-1") }}
                </p>
                <p>
                    {{ $t("video-games people desc 2-2") }}
                </p>
                <p>
                    {{ $t("video-games people desc 2-3") }}
                </p>
                <p>
                    {{ $t("video-games people desc 2-4") }}
                </p>
            </div>
        </div>
    </section>

    <div class="quote">
        <section>
            <blockquote class="quote-text">
                <p>
                    {{ $t("video-games quote") }}
                </p>
                <footer class="quote-author">
                    <img
                        class="quote-avatar"
                        src="~/assets/images/testimonials/arielmckay.png"
                    />
                    {{ $t("video-games quote author") }}
                </footer>
            </blockquote>
        </section>
    </div>

    <section class="section">
        <h2 class="title">
            {{ $t("video-games reasons title") }}
        </h2>
        <ul class="check-list">
            <li>
                {{ $t("video-games reasons item 1") }}
            </li>
            <li>
                {{ $t("video-games reasons item 2") }}
            </li>
            <li>
                {{ $t("video-games reasons item 3") }}
            </li>
        </ul>
        <p>
            <a
                class="button button--alt is-large"
                :href="`https://account.cg-wire.com/${$i18n.locale}/signup`"
            >
                {{ $t("video-games button demo") }}
            </a>
        </p>
    </section>

    <section class="section">
        <StudiosVideoGames />
    </section>

    <div class="video">
        <section class="section">
            <div class="flexrow">
                <div class="flex-item">
                    <iframe
                        style="border-radius: 20px"
                        width="640"
                        height="480"
                        src="https://www.youtube.com/embed/Fik4Rp6S1Bs?si=s8CYqpf5MsyX1eZ0"
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
                    ></iframe>
                </div>
                <div class="flex-item video-text">
                    <p>
                        {{ $t("usecase demo") }}
                        <a href="http://www.supercell.com/">Supercell</a>
                    </p>
                </div>
            </div>
        </section>
    </div>

    <Trial />
</template>

<script setup>
const name = "TV Shows";
const { t } = useI18n();
useHead({
    title: t("video-games title"),
    meta: [{ name: "description", content: t("video-games subtitle") }],
});
let panel = ref("supervisor");
function selectPanel(section) {
    panel.value = section;
}
</script>
