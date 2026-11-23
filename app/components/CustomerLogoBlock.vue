<template>
  <li class="customers-item">
    <a
      :href="
        caseStudy
          ? $localePath({ name: 'studios-slug', params: { slug: elementKey } })
          : link
      "
    >
      <NuxtImg
        :src="'/images/studios-inverted/logo-' + elementKey + '.png'"
        format="webp"
        :alt="name"
      />
    </a>
  </li>
</template>

<script setup>
defineProps({
  name: String,
  elementKey: String,
  caseStudy: String,
  link: {
    type: String,
    default: ''
  }
})
</script>

<style lang="stylus" scoped></style>
