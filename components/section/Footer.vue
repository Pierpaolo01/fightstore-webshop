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
        <div
          class="flex flex-col tablet:flex-row gap-4 tablet:gap-8 justify-between w-full"
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
                    Tel Almere:
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

          <div>
            <h5 class="font-semibold text-lg mb-2">Onze partners</h5>
            <div
              class="flex items-start tablet:items-center flex-col tablet:flex-row gap-4"
            >
              <a href="http://finestfightevents.nl/" target="_blank">
                <img src="/FFE_Logo.png" alt="" class="w-[100px]" />
              </a>
              <img src="/joyalogo.png" alt="" class="w-[100px]" />
              <img src="/boosterlogo.webp" alt="" class="w-[200px]" />
            </div>
          </div>
        </div>
      </UContainer>
    </div>
    <div class="bg-black w-full">
      <UContainer
        class="p-8 flex items-center justify-between flex-col-reverse tablet:flex-row gap-4"
      >
        <div class="flex items-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100076449952629"
            target="_blank"
            class="rounded-md hover:bg-slate-200/30 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36"
              height="36"
              fill="#fff"
              viewBox="0 0 24 24"
            >
              <path
                d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/fightstore036/"
            target="_blank"
            class="rounded-md hover:bg-slate-200/30 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
              ></path>
            </svg>
          </a>
        </div>
        <div class="text-white">
          <img
            src="/logo_inverted.png"
            alt="store logo"
            class="max-w-[240px]"
          />
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
