<template>
<li>
  <a :href="url" class="production">
    <img :src="useAsset(picture + '.png')" />
    <span>{{ title }}</span>
  </a>
</li>

</template>

<script setup>
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

function useAsset(path) {
  const assets = import.meta.glob('~/assets/images/productions/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/images/productions/' + path]
}
</script>

<style lang="stylus" scoped>
</style>
