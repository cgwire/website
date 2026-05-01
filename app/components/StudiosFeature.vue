<template>
  <ul class="customers">
    <CustomerLogoBlock
      v-for="studio in studios"
      :link="studio.meta.link"
      :element-key="studio.meta.elementKey"
      :name="studio.meta.name"
    />
  </ul>
</template>

<script setup>
const { locale } = useI18n()
const type = ref('feature-films')

const { buildStudiosQuery } = useStudios(locale, type)

const { data: studios } = await useAsyncData(
  () => `studios-${type.value}-${locale.value}`,
  buildStudiosQuery,
  { watch: [locale, type] }
)
</script>
