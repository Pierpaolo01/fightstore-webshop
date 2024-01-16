<template>
  <div class="bg-gray-50 flex items-center justify-center">
    <div class="flex flex-col items-center w-full">
      <FilterButton v-model="isOpen" title="Maat" />
      <div
        class="flex items-center justify-between w-full font-currency space-x-2"
        :class="{ hidden: !isOpen }"
      >
        <button
          v-for="size in sizeOptions"
          :key="size.value"
          :class="['size-button', { 'bg-black': isActive(size.input) }]"
          @click="toggleSizeFilter(size.input)"
        >
          {{ size.value }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Collection } from "~/graphql/collectionsQueries";
const isOpen = ref(true);

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

onBeforeMount(() => {
  props.filters.find((filter) => filter.id === "filter.v.option.maat");
});

const emit = defineEmits(["addFilter", "removeFilter"]);

const sizeOptions = computed(() => {
  return props.filters
    .find((filter) => filter.id === "filter.v.option.maat")
    ?.values.map((value) => {
      const parsedInput = JSON.parse(value.input);
      return {
        value: parsedInput.variantOption.value,
        input: parsedInput,
      };
    });
});

const isActive = (input) => {
  return props.activeFilters.some(
    (filter) => JSON.stringify(filter) === JSON.stringify(input)
  );
};

const toggleSizeFilter = (input) => {
  console.log(input);
  if (isActive(input)) {
    emit("removeFilter", input);
  } else {
    emit("addFilter", input);
  }
};
</script>
