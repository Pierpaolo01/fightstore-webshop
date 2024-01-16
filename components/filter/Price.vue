<template>
  <div class="bg-gray-50 flex items-center justify-center">
    <div class="flex flex-col items-center w-full">
      <FilterButton v-model="isOpen" title="prijs (€)" />
      <div
        class="flex items-center justify-between w-full font-currency space-x-2"
        :class="{ hidden: !isOpen }"
      >
        <div class="border border-gray-300 rounded-md p-2 flex-1 flex">
          <span class="text-gray-700 text-sm mr-2">€</span>
          <input
            type="number"
            class="MinMaxInput"
            placeholder="0.00"
            min="0"
            v-model="price.price.min"
          />
        </div>
        <span class="text-gray-800">-</span>
        <div class="border border-gray-300 rounded-md p-2 flex-1 flex">
          <span class="text-gray-700 text-sm mr-2">€</span>
          <input
            type="number"
            class="MinMaxInput"
            placeholder="0.00"
            min="0"
            v-model="price.price.max"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Collection } from "~/graphql/collectionsQueries";

const props = defineProps({
  filters: {
    type: Object as PropType<Collection["products"]["filters"]>,
    required: true,
  },
  activeFilters: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["addFilter", "update:AddFilter"]);

const isOpen = ref(true);
const price = ref();

onBeforeMount(() => {
  const priceFilter = props.filters.find(
    (filter) => filter.type === "PRICE_RANGE"
  );

  price.value = priceFilter?.values[0].input
    ? { id: "PRICE_FILTER", ...JSON.parse(priceFilter?.values[0].input) }
    : {
        id: "PRICE_FILTER",
        price: {
          min: 0,
          max: 0,
        },
      };

  emit("addFilter", price.value);
});
</script>

<style scoped>
.MinMaxInput {
  @apply text-sm outline-none placeholder:opacity-50 w-10/12;
}
</style>
