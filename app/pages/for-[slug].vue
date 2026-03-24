<template>
    <NuxtLayout name="for-audience" :audience="`${slug}`">
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
let { slug } = await useI18NSlug()
</script>
