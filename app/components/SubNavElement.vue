<template>
<nuxt-link
  class="navbar-item flexrow subnav-element"
  :to="$localePath(elementKey)"
  v-if="link === ''"
>
  <img
    class="flexrow-item tablet"
    :src="useAsset(elementKey + '.svg')"
  />
  <div class="flexrow-item flexcolumn text">
    <span class="flexrow-item subnav-title">
      {{ $t('header title ' + elementKey)}}
    </span>
    <span class="flexrow-item subnav-text">
      {{ $t('header text ' + elementKey)}}
    </span>
  </div>
</nuxt-link>
<a
  class="navbar-item flexrow subnav-element"
  :href="link"

  target="_blank"
  v-else
>
  <img
    class="flexrow-item tablet"
    :src="useAsset(elementKey + '.svg')"
  />
  <div class="flexrow-item flexcolumn text">
    <span class="flexrow-item subnav-title">
      {{ $t('header title ' + elementKey)}}
    </span>
    <span class="flexrow-item subnav-text">
      {{ $t('header text ' + elementKey)}}
    </span>
  </div>
</a>
</template>

<script setup>
const props = defineProps({
  elementKey: String,
  link: {
    type: String,
    default: ''
  }
})

function useAsset(path) {
  const assets = import.meta.glob('~/assets/icons/*', {
    eager: true,
    import: 'default',
  })

  return assets['/assets/icons/' + path]
}
</script>

<style lang="stylus" scoped>
.subnav-element:first-child
  margin-top 5px

.subnav-element:last-child
  margin-bottom 5px

.subnav-element
  border-radius 0.5rem
  width: 380px
  margin-left: 5px

img.flexrow-item
  min-width 48px
  min-height 48px
  margin-right 1rem

.flexrow-item.text
  align-items flex-start
  flex-wrap wrap
  overflow hidden
  padding .5em 0
  margin-right 0

  .subnav-title
    font-weight 600
    margin-right 0

  .subnav-text
    color #808080
    margin-right 0
    white-space normal

@media (max-width: 769px)
  img.flexrow-item
    display none

  .flexrow-item.text
    padding .1em 0
</style>
