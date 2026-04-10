<template>
  <p
    class="question"
    @click="isExpanded ? $emit('unexpand', index) : $emit('expand', index)"
  >
    {{ question }}
    <span class="contract" v-if="isExpanded"> - </span>
    <span class="contract" v-if="!isExpanded"> + </span>
  </p>
  <p class="answer" v-show="isExpanded">
    {{ answer }}
  </p>
</template>

<script setup>
const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  isExpanded: {
    type: Boolean,
    default: false
  },
  question: String,
  answer: String
})

const emit = defineEmits(['expand', 'unexpand'])
</script>

<style lang="stylus" scoped>
.question
  cursor pointer
</style>
