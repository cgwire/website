<template>
    <NuxtLayout name="faq" :slug="slug">
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
let { slug } = await useI18NSlug()
</script>
