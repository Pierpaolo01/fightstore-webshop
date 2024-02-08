<template>
  <form ref="form" @submit.prevent="sendEmail" class="max-w-lg rounded-lg">
    <div class="mb-4">
      <h3>Neem contact op</h3>
      <p>Wij doen ons best om jouw vragen te beantworden</p>
    </div>
    <div class="mb-4">
      <label for="from_name" class="block text-gray-700 text-sm font-bold mb-2">
        Naam *
      </label>
      <input
        type="text"
        name="from_name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="formName"
      />
      <div v-if="formNameError" class="text-red-600">
        Naam veld is verplicht
      </div>
    </div>
    <div class="mb-4">
      <label
        for="from_email"
        class="block text-gray-700 text-sm font-bold mb-2"
      >
        Email *
      </label>
      <input
        type="email"
        name="from_email"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="formEmail"
      />
      <div v-if="formEmailError" class="text-red-600">
        Email veld is verplicht
      </div>
    </div>
    <div class="mb-6">
      <label for="message" class="block text-gray-700 text-sm font-bold mb-2">
        Toelichting
      </label>
      <textarea
        name="message"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        rows="3"
      ></textarea>
    </div>
    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="bg-green-500 font-roboto hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center gap-2"
        :class="{ 'cursor-not-allowed opacity-70': loading }"
        :disabled="loading"
      >
        <IconLoading v-if="loading" class="animate-spin" />
        Verstuur
      </button>

      <div v-if="success" class="text-green-500">
        Bericht succesvol verzonden!
      </div>
      <div v-if="failure" class="text-red-500">
        Verzenden mislukt. Probeer het opnieuw.
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { init, sendForm } from "@emailjs/browser";

const config = useRuntimeConfig();

onMounted(() => {
  init(config.public.EMAILJS_PUBLIC_KEY);
});

const form = ref<HTMLFormElement>();
const loading = ref(false);
const success = ref(false);
const failure = ref(false);
const formName = ref("");
const formNameError = ref(false);
const formEmail = ref("");
const formEmailError = ref(false);

const sendEmail = () => {
  if (!formName.value) {
    formNameError.value = true;

    setTimeout(() => {
      formNameError.value = false;
    }, 3000);
  }

  if (!formEmail.value) {
    formEmailError.value = true;

    setTimeout(() => {
      formEmailError.value = false;
    }, 3000);
  }

  if (!formName.value || !formEmail.value) {
    return;
  }

  loading.value = true;
  success.value = false;
  failure.value = false;

  sendForm(
    config.public.EMAILJS_SERVICE_ID,
    config.public.EMAILJS_TEMPLATE_ID,
    form.value ?? ""
  )
    .then(
      () => {
        success.value = true;
        form.value?.reset();

        setTimeout(() => {
          success.value = false;
        }, 5000);
      },
      (error) => {
        failure.value = true;

        setTimeout(() => {
          failure.value = false;
        }, 5000);
      }
    )
    .finally(() => {
      loading.value = false;
    });
};
</script>
