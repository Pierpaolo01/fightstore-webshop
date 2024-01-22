<template>
  <NuxtLink
    :to="disabled ? '' : `/products/${handle}`"
    class="w-64 group cursor-pointer flex flex-col justify-between h-96"
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div class="w-full h-fit overflow-hidden self-center">
      <img
        v-if="featuredImageUrl"
        :src="featuredImageUrl"
        alt="product image"
        class="group-hover:scale-110 transition-all duration-300 h-full w-full object-contain"
      />
    </div>
    <div class="flex justify-between space-x-2 overflow-hidden">
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
        class="transition-all duration-300 h-5 w-5 flex-shrink-0 flex-1"
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
