<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center justify-between px-4 py-2 bg-white border-2 border-slate-900 rounded-md font-roboto font-semibold text-sm hover:bg-slate-100"
    >
      <span>
        {{ selectedOption.label }}
      </span>
      <IconChevron class="w-4 ml-2" />
    </button>
    <div
      v-if="isOpen"
      class="absolute z-10 w-fit min-w-44 mt-1 bg-white border border-slate-900 rounded-md shadow-xl"
    >
      <ul class="py-1 text-gray-700">
        <li
          v-for="option in optionsMap"
          :key="option"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-slate-100 cursor-pointer font-roboto font-semibold text-sm"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const selectedOption = ref({
  label: "Geen",
  sortKey: undefined,
  reversed: false,
});

const optionsMap = [
  { label: "Prijs Oplopend", sortKey: "PRICE", reversed: false },
  { label: "Prijs Aflopend", sortKey: "PRICE", reversed: true },
  { label: "Naam Oplopend", sortKey: "TITLE", reversed: false },
  { label: "Naam Aflopend", sortKey: "TITLE", reversed: true },
  {
    label: "Best verkoopend",
    sortKey: "BEST_SELLING",
    reversed: false,
  },
  { label: "Meest relevant", sortKey: "RELEVANCE", reversed: false },
  { label: "Geen", sortKey: undefined, reversed: false },
];

const emit = defineEmits(["update:sort"]);

const selectOption = (object) => {
  selectedOption.value = object;
  isOpen.value = false;

  const optionMap = optionsMap.find((option) => option.label === object.label);

  emit("update:sort", {
    sortKey: optionMap.sortKey,
    reverse: optionMap.reversed,
  });
};
</script>
