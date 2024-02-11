<template>
  <NuxtLink
    :to="'/blogs/' + handle"
    class="rounded-md overflow-hidden group relative cursor-pointer flex flex-col justify-between"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div
      class="rounded-md shadow-md overflow-hidden h-full flex justify-center items-center"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        alt="article image"
        class="w-full h-full group-hover:scale-110 transition-all duration-200"
      />
      <img
        v-else
        src="/logo.png"
        alt="company_logo"
        class="group-hover:scale-110 transition-all duration-200"
      />
    </div>
    <div class="space-y-2 mt-4">
      <h4 class="line-clamp-2" :title="title">{{ title }}</h4>
      <span class="flex space-x-2 text-blue-700 uppercase italic text-xs">
        <span
          class="group-hover:pl-1 group-hover:scale-110 transition-all duration-200"
          >Lees meer</span
        >
        <IconArrowRight
          class="w-4 transition-all duration-200"
          :class="{
            'animate-slideOutRight': isHovering,
            'animate-slideInLeft': !isHovering,
          }"
        />
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  handle: {
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

const isHovering = ref(false);
</script>

<style scoped>
.animate-slideOutRight {
  animation: slideOutRight 0.3s forwards;
}

.animate-slideInLeft {
  animation: slideInLeft 0.3s forwards;
}

@keyframes slideOutRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes slideInLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
