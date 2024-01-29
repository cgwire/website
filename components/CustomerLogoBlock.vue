<template>
<li class="customers-item">
  <a :href="link">
    <img
      :src="useAsset(`images/studios/logo-${elementKey}.png`)"
      :alt="name"
    />
  </a>
</li>
</template>

<script setup>
const props = defineProps({
  name: String,
  elementKey: String,
  link: {
    type: String,
    default: ''
  }
})
</script>

<style lang="stylus" scoped>
</style>
