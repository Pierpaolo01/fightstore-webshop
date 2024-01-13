<template>
  <div class="bg-gray-50 flex items-center justify-center">
    <div class="flex flex-col items-center w-full">
      <FilterButton v-model="isOpen" title="prijs (€)" />
      <div
        class="flex items-center justify-between w-full font-currency"
        :class="{ hidden: !isOpen }"
      >
        <div class="border border-gray-300 rounded-md p-2">
          <span class="text-gray-700 text-sm mr-2">€</span>
          <input type="number" class="MinMaxInput" placeholder="0.00" min="0" />
        </div>
        <span class="text-gray-800">-</span>
        <div class="border border-gray-300 rounded-md p-2">
          <span class="text-gray-700 text-sm mr-2">€</span>
          <input type="number" class="MinMaxInput" placeholder="0.00" min="0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(true);
</script>

<style scoped>
.MinMaxInput {
  @apply text-sm outline-none w-14 placeholder:opacity-50;
}
</style>
