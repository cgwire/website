<template>
<li>
  <a :href="url" class="production">
    <img :src="useAsset('images/productions/' + picture + '.png')" />
    <span>{{ title }}</span>
  </a>
</li>

</template>

<script setup>
import { useAsset } from '@/utils/assets'

const props = defineProps({
  picture: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>

<style lang="stylus" scoped>
</style>
