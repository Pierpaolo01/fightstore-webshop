<template>
  <button
    class="text-gray-800 uppercase text-lg flex items-center justify-between font-roboto text-left w-full font-semibold"
    :class="{ 'mb-2': isOpen }"
    @click="isOpen = !isOpen"
  >
    {{ title }}
    <IconChevron
      class="h-4 duration-200 stroke-2"
      :class="{ '-rotate-90': !isOpen }"
    />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean,
  title: String,
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
