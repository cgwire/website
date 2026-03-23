<template>
    <NuxtLayout name="features" :slug="slug">
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
let { slug } = await useI18NSlug()
</script>
