<template>
  <component
    :is="link ? 'a' : NuxtLink"
    class="navbar-item flexrow subnav-element"
    v-bind="
      link
        ? { href: link, target: '_blank', rel: 'noopener' }
        : {
            to: $localePath({
              name: pathObject ?? elementKey,
              params: pathObject ? { slug: $t(`slugs.${elementKey}`) } : {}
            })
          }
    "
  >
    <img
      class="flexrow-item"
      :src="'/images/icons/' + elementKey + '.' + imageExt"
      alt=""
    />
    <div class="flexrow-item flexcolumn text">
      <span class="flexrow-item subnav-title">
        {{ $t('header.title.' + elementKey) }}
      </span>
      <span class="flexrow-item subnav-text">
        {{ $t('header.text.' + elementKey) }}
      </span>
    </div>
  </component>
</template>

<script setup>
import { NuxtLink } from '#components'

const props = defineProps({
  elementKey: String,
  pathObject: String,
  link: {
    type: String,
    default: ''
  },
  imageExt: {
    type: String,
    default: 'svg'
  }
})
</script>

<style lang="stylus" scoped>
.subnav-element:first-child
  margin-top 5px

.subnav-element:last-child
  margin-bottom 5px

.subnav-element
  border-radius 0.5rem
  width 380px
  margin-left 5px

img.flexrow-item
  min-width 48px
  min-height 48px
  margin-right 1rem
  border-radius 0.75rem

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
