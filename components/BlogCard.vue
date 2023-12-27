<template>
  <div class="rounded-md overflow-hidden sha">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="article image"
      class="rounded-md shadow-md"
    />
    <div class="space-y-1 mt-2">
      <h4>{{ title }}</h4>
      <NuxtLink
        to="/home"
        class="flex space-x-2 text-blue-700 uppercase italic text-xs"
      >
        <span>Lees meer</span> <IconArrowRight class="w-4" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
