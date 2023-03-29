<template>
<div class="tile is-6 is-vertical ppl">
  <div class="ppl-image">
    <img :src="useAsset(memberKey)" alt="">
  </div>
  <div class="ppl-id">
    <h3 class="ppl-id-name">{{ $t(`about team id ${memberKey}`) }}</h3>
    <p class="ppl-id-role">{{ $t(`about team role ${memberKey}`) }}</p>
  </div>
  <div class="ppl-description">
    <p>
      {{ $t(`about team explanation ${memberKey}`) }}
    </p>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  memberKey: String
})

function useAsset(path) {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  })
  return assets['/assets/images/team/' + path + '.png']
}
</script>

<style lang="stylus" scoped>
.ppl
  background #F4F8FF
  border-radius 1.5em
  border-radius 50px 50px 50px 50px / 25px 25px 25px 25px
  margin 1em

img
    box-shadow 0 0 4px #B4B8BF
</style>
