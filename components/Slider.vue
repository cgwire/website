<template>
  <div class="slider-container">
    <span class="slider-value">
      {{ modelValue }} {{ $t(label, modelValue) }}
    </span>
      <input
        class="slider"
        type="range"
        :min="min"
        :max="max"
        :value="modelValue"
        @input="$emit('update:modelValue', parseInt($event.target.value))"
      />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'users'
  },
  modelValue: {
    type: [Number, String],
    required: true
  },
  min: {
    type: Number,
    default: 1
  },
  max: {
    type: Number,
    default: 300
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.slider-value {
  font-size: 1.6rem;
  font-weight: bold;
  min-width: 140px;
}

.slider-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #ddd;

  background: #4CAF50;
  outline: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}
</style>
