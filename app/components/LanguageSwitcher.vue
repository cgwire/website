<template>
  <NuxtLink
    v-if="isReady"
    v-for="loc in locales"
    :key="loc.code"
    :to="$switchLocalePath(loc.code)"
    class="flexrow-item navbar-lang-item"
  >
    {{ loc.code.toUpperCase() }}
  </NuxtLink>
</template>

<script setup>
const { locales } = useI18n()
const { isReady } = await useI18NSlug()
</script>
