<template>
  <NuxtLink
    :to="disabled ? '' : `/products/${handle}`"
    class="w-64 group cursor-pointer h-full flex flex-col justify-between"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div class="w-full h-fit overflow-hidden self-center">
      <img
        v-if="featuredImageUrl"
        :src="featuredImageUrl"
        alt="product image"
        class="group-hover:scale-110 transition-all duration-300"
      />
    </div>
    <div class="flex justify-between space-x-2">
      <div class="font-roboto text-left">
        <p class="font-bold">
          {{ title }}
        </p>
        <span class="font-medium text-left font-currency">
          {{ minVariantPrice.amount }}
          {{ minVariantPrice.currencyCode }}
        </span>
      </div>
      <IconArrowRight
        class="transition-all duration-300 h-6 w-6"
        :class="{
          'animate-slideOutRight': isHovering,
          'animate-slideInLeft': !isHovering,
        }"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const isHovering = ref(false);

defineProps({
  handle: {
    type: String,
    required: true,
  },
  featuredImageUrl: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  minVariantPrice: {
    type: Object as PropType<{
      amount: number;
      currencyCode: string;
    }>,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});
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
    opacity: 1;
  }
  100% {
    transform: translateX(20px);
    opacity: 0;
  }
}

@keyframes slideInLeft {
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
