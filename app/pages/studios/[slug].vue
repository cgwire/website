<template>
  <NuxtLayout name="studio" :slug="slug">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
let { slug } = await useI18NSlug()
</script>
