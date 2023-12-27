<template>
  <div class="flex space-x-4">
    <div class="block min-h-full w-2 rounded bg-blue-500" />
    <h2 class="uppercase">{{ label }}</h2>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
