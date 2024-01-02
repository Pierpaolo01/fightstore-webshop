<template>
  <UForm
    :state="state"
    class="space-y-4 max-w-[450px] mx-auto y-padding"
    @submit="onSubmit"
  >
    <UFormGroup label="Name" name="name">
      <input
        type="text"
        placeholder="Jouw naam"
        class="border border-gray-300 rounded px-2 py-1 focus:outline-none w-full"
      />
    </UFormGroup>

    <UFormGroup label="Email" name="email" required>
      <input
        type="email"
        placeholder="Jouw email"
        class="border border-gray-300 rounded px-2 py-1 focus:outline-none w-full"
      />
    </UFormGroup>

    <UFormGroup label="Description" name="description" required>
      <textarea
        type="email"
        placeholder="Toelichting"
        class="border border-gray-300 rounded px-2 py-1 focus:outline-none w-full"
      />
    </UFormGroup>

    <Button type="submit" variant="outlined" color="black" class="w-full">
      Verstuur
    </Button>
  </UForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";

const state = reactive({
  email: undefined,
  password: undefined,
});

const onSubmit = async (event: FormSubmitEvent<any>) => {
  alert(event.data);
};
</script>
