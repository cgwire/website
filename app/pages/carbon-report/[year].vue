<template>
  <CarbonReport :year="Number(route.params.year)" />
</template>

<script setup>
definePageMeta({
  validate: route => ['2024', '2025'].includes(route.params.year)
})

const route = useRoute()
</script>
