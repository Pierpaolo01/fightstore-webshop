<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="99"
      height="99"
      :stroke="isActive ? 'black' : '#E5E5E5'"
    />
    <rect
      x="38"
      y="7"
      width="24"
      height="86"
      :fill="isActive ? 'black' : '#E5E5E5'"
    />
    <rect
      x="6"
      y="7"
      width="24"
      height="86"
      :fill="isActive ? 'black' : '#E5E5E5'"
    />
    <rect
      x="70"
      y="7"
      width="24"
      height="86"
      :fill="isActive ? 'black' : '#E5E5E5'"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>
