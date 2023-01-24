<template>
<p class="question">
  {{ $t('pricing faq question' + index) }}
  <span
    class="contract"
    @click="$emit('unexpand', index)"
    v-if="isExpanded"
  >
  -
  </span>
  <span
    class="contract"
    @click="$emit('expand', index)"
    v-if="!isExpanded"
  >
  +
  </span>
</p>
<p class="answer" v-show="isExpanded">
  {{ $t('pricing faq answer1') }}
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
</script>
