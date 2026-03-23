<template>
    <NuxtLayout name="tool-alternative" :tool="`${slug}`">
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
let { slug } = await useI18NSlug()
</script>
