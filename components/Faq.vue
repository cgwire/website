<template>
<p
  class="question"
  @click="$emit(isExpanded ? 'unexpand' : 'expand', index)"
>
  {{ $t('pricing faq question' + index) }}
  <span
    class="contract"
    v-if="isExpanded"
  >
  -
  </span>
  <span
    class="contract"
    v-if="!isExpanded"
  >
  +
  </span>
</p>
<p class="answer" v-show="isExpanded">
  {{ $t('pricing faq answer' + index) }}
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
  }
})

const emit = defineEmits(['expand', 'unexpand'])
</script>

<style lang="stylus" scoped>
.question
  cursor pointer
</style>
