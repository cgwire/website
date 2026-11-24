<template>
  <CarbonReport :year="Number(route.params.year)" />
</template>

<script setup>
definePageMeta({
  validate: route => ['2024', '2025'].includes(route.params.year)
})

const route = useRoute()
const localePath = useLocalePath()

// The index page shows the latest report: point search engines at it.
if (route.params.year === '2025') {
  useHead({
    link: [
      {
        id: 'i18n-can',
        rel: 'canonical',
        href: 'https://www.cg-wire.com' + localePath('carbon-report')
      }
    ]
  })
}
</script>
