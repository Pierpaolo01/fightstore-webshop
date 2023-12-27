<template>
  <div class="w-full">
    <div class="bg-off-white p-8">
      <UContainer>
        <form
          @submit.prevent="submitNewsletter"
          class="flex flex-col items-center justify-center space-y-4 max-w-[300px] mx-auto"
        >
          <div
            class="flex items-center border border-gray-100 bg-white rounded overflow-hidden w-full"
          >
            <input
              id="email"
              type="email"
              v-model="email"
              placeholder="Your email"
              class="pl-3 py-2 w-full focus:outline-none bg-white"
            />
            <button type="submit" class="p-3 text-black/40">
              <IconSend class="-rotate-45 h-5 w-5" />
            </button>
          </div>
          <button
            class="rounded-md px-8 py-3 text-white font-bold font-roboto bg-blue-500 w-full"
          >
            Abonneer op onze nieuwsbrief
          </button>
        </form>
      </UContainer>
    </div>
    <div class="bg-darker-white/15 p-8">
      <UContainer class="flex justify-center items-center p-8 pb-8">
        <img src="/logo.png" alt="store logo" class="max-w-[240px]" />
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
//TODO Create newsletter signups
const submitNewsletter = () => {
  alert("You have subscribed to our newsletter!");
};

const email = ref("");
</script>
