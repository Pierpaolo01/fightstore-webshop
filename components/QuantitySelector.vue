<template>
  <div class="flex" :class="{ 'opacity-50': disabled }">
    <button
      class="px-2 py-1 border border-gray-300 rounded-l hover:bg-gray-100"
      :class="{ 'cursor-not-allowed': disabled }"
      @click="decrement"
    >
      -
    </button>
    <input
      type="number"
      class="w-12 text-center border-t border-b border-gray-300 bg-white focus:outline-none font-medium text-base font-roboto"
      :disabled="disabled"
      :class="{ 'cursor-not-allowed': disabled }"
      v-model="innerValue"
      @input="emitUpdate"
    />
    <button
      class="px-2 py-1 border border-gray-300 rounded-r hover:bg-gray-100"
      :class="{ 'cursor-not-allowed': disabled }"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const innerValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue;
  }
);

const increment = () => {
  if (props.disabled) return;
  innerValue.value++;
  emitUpdate();
};

const decrement = () => {
  if (props.disabled) return;

  if (innerValue.value > 1) {
    innerValue.value--;
    emitUpdate();
  }
};

const emitUpdate = () => {
  emit("update:modelValue", innerValue.value);
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
