<template>
    <li>
        <a :href="url" class="production">
            <NuxtPicture
                :src="'/images/productions/' + picture + '.png'"
                format="webp"
            />
            <span>{{ title }}</span>
        </a>
    </li>
</template>

<script setup>
const props = defineProps({
    picture: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});
</script>

<style lang="stylus" scoped></style>
