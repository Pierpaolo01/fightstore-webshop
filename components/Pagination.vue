<template>
  <div class="flex justify-center space-x-4 mt-4">
    <button
      :disabled="!pageInfo.hasPreviousPage"
      @click="navigate('prev')"
      class="px-4 py-2 text-slate-600 rounded-full p-4 border-2 border-slate-600"
      :class="{ 'opacity-50': !pageInfo.hasPreviousPage }"
    >
      <IconArrowRight class="fill-slate-600 w-5 rotate-180" />
    </button>

    <button
      :disabled="!pageInfo.hasNextPage"
      @click="navigate('next')"
      class="px-4 py-2 text-slate-600 rounded-full p-4 border-2 border-slate-600"
      :class="{ 'opacity-50': !pageInfo.hasNextPage }"
    >
      <IconArrowRight class="fill-slate-600 w-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  pageInfo: {
    type: Object as PropType<{
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    }>,
    required: true,
  },
});

const emit = defineEmits(["navigatePrevious", "navigateNext"]);

function navigate(direction: "prev" | "next") {
  if (direction === "prev") {
    emit("navigatePrevious", props.pageInfo.startCursor);
    return;
  }

  emit("navigateNext", props.pageInfo.endCursor);
}
</script>

<style scoped>
button:disabled {
  cursor: not-allowed;
}
</style>
