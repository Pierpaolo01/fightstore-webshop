<template>
  <div class="space-y-4">
    <UInput
      v-model="gsModelValue"
      icon="i-heroicons-magnifying-glass-20-solid"
      placeholder="Zoek producten"
    />
    <div class="flex justify-between items-center">
      <div class="flex space-x-2">
        <span>Weergave</span>
        <button @click="emit('update:modelColumns', 2)">
          <IconTwoColumns :isActive="modelColumns === 2" />
        </button>
        <button @click="emit('update:modelColumns', 3)">
          <IconThreeColumns :isActive="modelColumns === 3" />
        </button>
        <button @click="emit('update:modelColumns', 4)">
          <IconFourColumns :isActive="modelColumns === 4" />
        </button>
      </div>
      <div>
        <span class="font-bold font-currency">{{ productCount ?? 0 }}</span>
        <span class=""> Producten</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  modelColumns: {
    type: Number,
    required: true,
  },
  productCount: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue", "update:modelColumns"]);

const gsModelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
