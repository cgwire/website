<template>
    <section
        class="section content landing-block customer-story mt2"
        data-aos="fade-up"
    >
        <a :href="storyUrl">
            <div class="flexrow reverse">
                <div class="flexrow-item landing-picture">
                    <NuxtPicture
                        :src="'/images/' + imagePath"
                        format="webp"
                        width="320"
                        height="240"
                        :alt="studioName"
                    />
                </div>
                <div class="flexrow-item landing-text">
                    <h2 class="section-subtitle">
                        Customer Story:<br />
                        {{ studioName }}
                    </h2>
                    <p>
                        <em> "{{ $t("main customer story " + storyKey) }}" </em
                        ><br />
                    </p>
                    <p class="mt1">
                        {{ interviewee }}
                    </p>
                </div>
            </div>
        </a>
    </section>
</template>

<script setup>
const props = defineProps({
    storyUrl: String,
    interviewee: String,
    studioName: String,
    storyKey: String,
    imagePath: String,
});
</script>

<style lang="stylus" scoped></style>
