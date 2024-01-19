<template>
  <div class="bg-gray-50 flex items-center justify-center pt-4">
    <div class="flex flex-col items-center w-full">
      <FilterButton v-model="isOpen" title="Beschikbaar" />
      <div
        class="flex items-center justify-between w-full font-currency"
        :class="{ hidden: !isOpen }"
      >
        <ul class="space-y-2 w-full">
          <li
            v-for="(availablity, input) in filterOptions"
            :key="input"
            class="flex items-center justify-between w-full"
          >
            <div class="flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 border-gray-800 rounded focus:ring-0 text-black"
                @click="toggleSizeFilter(availablity.value)"
              />
              <span class="font-roboto font-semibold ml-2">
                {{ availablity.value.available ? "Ja" : "Nee" }}
              </span>
            </div>
            <span class="font-light justify-self-end">{{
              availablity.count
            }}</span>
          </li>
        </ul>
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
  props.filters.find((filter) => filter.id === "filter.v.availability");
});

const emit = defineEmits(["addFilter", "removeFilter"]);

const filterOptions = computed(() => {
  return props.filters
    .find((filter) => filter.id === "filter.v.availability")
    ?.values.map((value) => {
      const parsedInput = JSON.parse(value.input);
      return {
        value: parsedInput,
        count: value.count,
      };
    });
});

const isActive = (input) => {
  return props.activeFilters.some(
    (filter) => JSON.stringify(filter) === JSON.stringify(input)
  );
};

const toggleSizeFilter = (input) => {
  if (isActive(input)) {
    emit("removeFilter", input);
  } else {
    emit("addFilter", input);
  }
};
</script>
