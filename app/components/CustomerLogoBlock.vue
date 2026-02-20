<template>
<li class="customers-item">
  <a :href="link">
    <img
      :src="useAsset(`logo-${elementKey}.png`)"
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

function useAsset(path) {
  const assets = import.meta.glob('~/assets/images/studios/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/images/studios/' + path]
}
</script>

<style lang="stylus" scoped>
</style>
