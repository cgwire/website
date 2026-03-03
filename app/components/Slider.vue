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
      :style="sliderStyle"
      @input="$emit('update:modelValue', parseInt($event.target.value))"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "users",
  },
  modelValue: {
    type: [Number, String],
    required: true,
  },
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: 300,
  },
});

const sliderStyle = computed(() => {
  const value = Number(props.modelValue);
  const min = props.min;
  const max = props.max;

  if (Number.isNaN(value) || max <= min) {
    return {};
  }

  const percentage = ((value - min) * 100) / (max - min);

  return {
    background: `linear-gradient(to right, #22c55e 0%, #22c55e ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
  };
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
.slider-value {
  font-size: 1.6rem;
  font-weight: 600;
  min-width: 140px;
  color: #0f172a;
}

.slider-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: #e5e7eb;
  outline: none;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 0 1px rgba(15, 23, 42, 0.06);
}

.slider::-webkit-slider-runnable-track {
  height: 6px;
  border-radius: 999px;
  background: transparent;
}

.slider::-moz-range-track {
  height: 6px;
  border-radius: 999px;
  background: transparent;
}

.slider::-webkit-slider-thumb,
.slider::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: #ffffff;
  border: 2px solid #22c55e;
  box-shadow: 0 6px 12px rgba(15, 23, 42, 0.18);
  cursor: pointer;
  transition:
    transform 0.15s ease-out,
    box-shadow 0.15s ease-out,
    border-color 0.15s ease-out,
    background-color 0.15s ease-out;
}

.slider:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);
}

.slider:hover::-webkit-slider-thumb,
.slider:hover::-moz-range-thumb {
  transform: scale(1.05);
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.25);
}

.slider:active::-webkit-slider-thumb,
.slider:active::-moz-range-thumb {
  transform: scale(0.98);
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.2);
  border-color: #22c55e;
}
</style>
