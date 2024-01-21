<template>
  <div class="flex space-x-2" v-if="filteredOptions.values.length">
    <Button
      v-for="option in filteredOptions.values"
      :key="option"
      variant="outlined"
      color="black"
      :class="[
        optionIsSelected(option)
          ? 'scale-90 bg-slate-300 border-slate-500'
          : '',
      ]"
      @click="selectSize(option)"
    >
      {{ option }}
    </Button>
  </div>
</template>

<script setup lang="ts">
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

const filteredOptions = computed(
  () =>
    props.options.find((option) => option.name.toLowerCase() === props.type) ??
    []
);

const optionIsSelected = (option: string) => {
  return props.selectedOptions.some(
    (selectedOption) => selectedOption[props.type] === option
  );
};

const emit = defineEmits(["update:option"]);

const selectSize = (option: string) => {
  emit("update:option", { [props.type]: option });
};
</script>
