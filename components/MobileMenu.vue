<template>
  <USlideover v-model="gsModelValue" side="left">
    <div class="w-full flex items-center justify-center p-4 relative">
      <IconClose
        class="absolute top-6 right-4 cursor-pointer z-50"
        @click="emit('update:modelValue', false)"
      />
      <span
        class="pt-2 cursor-pointer"
        @click="emit('update:modelValue', false)"
      >
        <img src="/logo.png" alt="store logo" class="w-36 laptop:w-52" />
      </span>
    </div>
    <div class="mt-8 overflow-y-auto">
      <ul class="px-6 divide-y space-y-4 pb-12 font-roboto">
        <li v-for="navItem in navigation" :key="navItem.title" class="pt-4">
          <button
            class="w-full text-left font-semibold hover:bg-gray-100 flex justify-between items-center"
            @click="toggleSection(navItem.title)"
          >
            <h3>
              {{ navItem.title }}
            </h3>
            <IconChevron
              class="h-4 duration-200 stroke-2 -rotate-90"
              :class="{ 'rotate-0': expandedSection === navItem.title }"
            />
          </button>
          <div
            v-if="expandedSection === navItem.title"
            class="pl-4 pr-2 py-2 bg-gray-50"
          >
            <div v-for="section in navItem.sections" :key="section.title">
              <h5 class="font-bold mt-4">{{ section.title }}</h5>
              <ul>
                <li
                  v-for="item in section.items"
                  :key="item.title"
                  class="text-sm py-1"
                >
                  <!-- TODO: Replace with NuxtLink and handle -->
                  <NuxtLink
                    class="nav-link w-fit"
                    :to="item.handle"
                    @click="emit('update:modelValue', false)"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </USlideover>
</template>

<script setup lang="ts">
import navItems from "~/data/navigation.json";

const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const gsModelValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const navigation = ref(navItems);
const expandedSection = ref();

const toggleSection = (title) => {
  expandedSection.value = expandedSection.value === title ? undefined : title;
};
</script>
