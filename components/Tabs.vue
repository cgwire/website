<template>
<div class="tabs">
    <button
      class="btn"
      :class="{
        'btn-primary': currentTab === tab,
        'btn-secondary': currentTab !== tab
      }"
      v-for="tab in tabs"
      :key="tab"
      @click="toggleTab(tab)"
    >
      {{ $t('tabs ' + tab) }}
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['toggleTab'])

defineProps({
  currentTab: {
    type: String,
    default: false,
  },
  tabs: {
    type: Array,
    default: () => [],
  },
})

const toggleTab = (tab) => {
  emit('toggleTab', tab);
};
</script>

<style lang="stylus" scoped>
cgwire-green = #00B242
light-grey = #E5E5E5
text-light = #868686


.tabs
  display: flex
  justify-content: stretch
  gap: 1rem
  margin: auto
  margin-bottom: 4rem
  border-radius: 50px
  border: 1px solid light-grey
  padding: 4px
  background: white
  font-weight: 300
  max-width: 860px

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

.btn
  padding: 1rem 2rem
  border: none
  font-size: 1rem
  font-weight: 600
  cursor: pointer
  transition: all 0.3s ease
  width: 50%

  &.btn-primary
    background: cgwire-green
    color: white
    border-radius: 50px

    &.active
      background: cgwire-green

  &.btn-secondary
    background: white
    color: text-light
    border-radius: 50px

    &:hover
      background: light-grey

@media (max-width: 768px)
  .tabs
    margin: 0.3em

    .btn
      padding: 0.5em 0.5em
      font-size: 0.75em
      width: 100%
</style>