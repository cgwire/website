<template>
    <li class="customers-item">
        <a :href="link">
            <NuxtPicture
                :src="'/images/studios/logo-' + elementKey + '.png'"
                format="webp"
                :alt="name"
            />
        </a>
    </li>
</template>

<script setup>
const props = defineProps({
    name: String,
    elementKey: String,
    link: {
        type: String,
        default: "",
    },
});
</script>

<style lang="stylus" scoped></style>
