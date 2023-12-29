<template>
  <div class="flex">
    <select
      class="cursor-pointer bg-transparent text-md px-8 py-2 h-[42px] font-roboto rounded font-bold border border-black text-black hover:bg-black hover:bg-opacity-30"
      v-model="selectedOption"
      @change="emitSelection"
    >
      <option
        v-for="option in filteredOptions.values"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  options: {
    type: Array as PropType<
      {
        id: string;
        name: string;
        values: string[];
      }[]
    >,
    required: true,
  },
  selectedOptions: {
    type: Array as PropType<Record<string, string>[]>,
    required: true,
  },
});

const filteredOptions = computed(() => {
  return (
    props.options.find(
      (option) => option.name.toLowerCase() === props.type
    ) ?? { values: [] }
  );
});

const selectedOption = ref(filteredOptions.value.values[0] || "");

const emit = defineEmits(["update:option"]);

const emitSelection = () => {
  emit("update:option", { [props.type]: selectedOption.value });
};
</script>
