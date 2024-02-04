<template>
  <div class="w-full">
    <!-- TODO News letter out of scope for now -->
    <!-- <div class="bg-off-white p-8">
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
    </div> -->
    <div class="bg-darker-white/15 p-8">
      <UContainer
        class="flex flex-col-reverse gap-4 tablet:gap-0 tablet:flex-row tablet:justify-between tablet:items-start p-8 pb-8"
      >
        <div class="flex flex-col tablet:flex-row gap-4 tablet:gap-8">
          <div>
            <h5 class="font-semibold text-lg mb-2">Policies</h5>
            <ul class="space-y-1">
              <li>
                <NuxtLink class="hover:underline" to="/policies/privacy"
                  >Privacybeleid</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="hover:underline" to="/policies/return"
                  >Retourbeleid</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-lg mb-2">Contact</h5>
            <ul class="space-y-1">
              <li>
                <p class="hover:underline" to="/policies/privacy">
                  Tel Alemere:
                  <a class="font-currency" href="tel:0641763393"
                    >+31 6 41763393</a
                  >
                </p>
              </li>
              <li>
                <p class="hover:underline">
                  Tel Hilversum:
                  <a class="font-currency" href="tel:0639735604"
                    >+31 6 39735604</a
                  >
                </p>
              </li>
              <li>
                <p class="hover:underline">
                  Email:
                  <a class="font-currency" href="mailto:info@fightstore036.nl"
                    >info@fightstore036.nl</a
                  >
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="">
          <img src="/logo.png" alt="store logo" class="max-w-[240px]" />
          <span class="text-xs font-light">© 2024 The Fightstore</span>
        </div>
      </UContainer>
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
//TODO Create newsletter signups
// const submitNewsletter = () => {
//   alert("You have subscribed to our newsletter!");
// };

// const email = ref("");
</script> -->
