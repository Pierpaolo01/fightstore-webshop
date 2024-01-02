<template>
  <button
    class="flex justify-center space-x-4 items-center px-2 py-3 border font-roboto font-medium text-lg text-black border-green-500 bg-green-500 rounded hover:bg-green-600"
    :class="{ 'opacity-50 cursor-not-allowed': isAddingToCart || disabled }"
    :disabled="isAddingToCart || disabled"
  >
    <IconCart v-if="!isAddingToCart" />
    <IconLoading v-else class="animate-spin" />
    <span> Voeg toe aan winkelwagen </span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  isAddingToCart: Boolean,
  disabled: Boolean,
});
</script>
