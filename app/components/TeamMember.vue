<template>
  <div class="tile is-6 is-vertical ppl">
    <div class="ppl-image">
      <NuxtImg :src="'/images/team/' + member.key + '.png'" alt="" />
    </div>
    <div class="ppl-id">
      <h3 class="ppl-id-name">{{ member.name }}</h3>
      <p class="ppl-id-role">{{ member.role }}</p>
    </div>
    <div class="ppl-description">
      <p>
        {{ member.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  member: Object
})
</script>

<style lang="stylus" scoped>
.ppl
  background lightblue
  border-radius 1.5em
  border-radius 50px 50px 50px 50px / 25px 25px 25px 25px
  margin 1em

img
    box-shadow 0 0 4px #B4B8BF
</style>
