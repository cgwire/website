<template>
<nuxt-link
  class="navbar-item flexcolumn subnav-element"
  :to="localePath(elementKey)"
>
  <span class="flexrow-item subnav-title">
    {{ $t('header title ' + elementKey)}}
  </span>
  <span class="flexrow-item subnav-text">
    {{ $t('header text ' + elementKey)}}
  </span>
</nuxt-link>
</template>

<script setup>
const props = defineProps({
  elementKey: String
})
</script>

<style lang="stylus" scoped>
</style>
