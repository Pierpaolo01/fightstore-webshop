<template>
  <NuxtLink
    :to="`/collections/${handle}`"
    class="relative rounded-xl overflow-hidden hover:shadow-xl hover:scale-95 duration-200 cursor-pointer"
  >
    <img
      v-if="image"
      class="w-full h-full object-cover"
      :src="image.url"
      :alt="image.altText"
    />
    <div
      class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
    >
      <div class="text-center space-y-6">
        <h3 class="text-white tablet:text-xl laptop:text-3xl">
          {{ title }}
        </h3>
        <Button variant="outlined" label="Shop now" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  image: {
    type: Object as () =>
      | {
          url: string;
          altText: string;
        }
      | undefined,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  handle: {
    type: String,
    required: true,
  },
});
</script>
