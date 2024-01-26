<template>
  <div class="fixed top-0 w-full bg-white z-50">
    <UContainer @mouseleave="currentNavItem = undefined">
      <div class="flex justify-between items-center py-4">
        <NuxtLink to="/" class="h-12">
          <img src="/logo.png" alt="store logo" class="h-12" />
        </NuxtLink>
        <div class="space-x-6 flex items-center">
          <div
            class="font-roboto font-semibold text-lg text-black/70 space-x-6 laptop:flex items-center hidden"
          >
            <div
              v-for="navItem in navigationData"
              :key="navItem.title"
              class="nav-item group"
              @mouseover="currentNavItem = navItem"
            >
              <span class="flex items-center">
                <span>{{ navItem.title }}</span>
                <IconChevron
                  class="h-4 -rotate-90 group-hover:rotate-0 duration-200 stroke-2"
                />
              </span>
            </div>
          </div>
          <Cart />
        </div>
      </div>
      <!-- Submenu -->
      <Transition name="fade">
        <div v-if="currentNavItem" class="flex items-start">
          <div
            class="grid grid-cols-2 gap-4"
            v-for="section in currentNavItem.sections"
            :key="section.title"
          >
            <div class="pb-6">
              <h3 class="font-semibold mb-4">{{ section.title }}</h3>
              <ul class="space-y-2 font-roboto">
                <li v-for="item in section.items" :key="item.title">
                  <!-- TODO NuxtLink to :to="`/${item.handle}`" -->
                  <span class="nav-link w-fit">
                    {{ item.title }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const currentNavItem = ref();

const navigationData = ref([
  {
    title: "Fightgear",
    sections: [
      {
        title: "Handschoenen",
        items: [
          {
            title: "(Kick)bokshandschoenen",
            handle: "TODO",
          },
          {
            title: "MMA handschoenen",
            handle: "TODO",
          },
          {
            title: "Bandages",
            handle: "TODO",
          },
          {
            title: "Handschoen accessoires",
            handle: "TODO",
          },
        ],
      },
      {
        title: "Bescherming",
        items: [
          {
            title: "Scheenbeschermers",
            handle: "TODO",
          },
          {
            title: "Kniebeschermers",
            handle: "TODO",
          },
          {
            title: "Hoofdbeschermers",
            handle: "TODO",
          },
          {
            title: "Bitjes",
            handle: "TODO",
          },
          {
            title: "Binnenhandschoenen",
            handle: "TODO",
          },
          {
            title: "Tok / Kruisbeschermers",
            handle: "TODO",
          },
        ],
      },
      {
        title: "Fightshorts",
        items: [
          {
            title: "Kickboks broekjes",
            handle: "TODO",
          },
          {
            title: "MMA Broekjes",
            handle: "TODO",
          },
          {
            title: "Boks broekjes",
            handle: "TODO",
          },
          {
            title: "Trainingsbroeken",
            handle: "TODO",
          },
          {
            title: "Trainings T-Shirts",
            handle: "TODO",
          },
        ],
      },
    ],
  },
  {
    title: "kids",
    sections: [
      {
        title: "Handschoenen",
        items: [
          {
            title: "(Kick)bokshandschoenen",
            handle: "TODO",
          },
          {
            title: "MMA handschoenen",
            handle: "TODO",
          },
          {
            title: "Bandages",
            handle: "TODO",
          },
          {
            title: "Handschoen accessoires",
            handle: "TODO",
          },
        ],
      },
      {
        title: "Bescherming",
        items: [
          {
            title: "Scheenbeschermers",
            handle: "TODO",
          },
          {
            title: "Kniebeschermers",
            handle: "TODO",
          },
          {
            title: "Hoofdbeschermers",
            handle: "TODO",
          },
          {
            title: "Bitjes",
            handle: "TODO",
          },
          {
            title: "Binnenhandschoenen",
            handle: "TODO",
          },
          {
            title: "Tok / Kruisbeschermers",
            handle: "TODO",
          },
        ],
      },
      {
        title: "Broekjes",
        items: [
          {
            title: "Kickboks broekjes",
            handle: "TODO",
          },
          {
            title: "MMA Broekjes",
            handle: "TODO",
          },
          {
            title: "Boks broekjes",
            handle: "TODO",
          },
          {
            title: "Trainingsbroeken",
            handle: "TODO",
          },
          {
            title: "Trainings T-Shirts",
            handle: "TODO",
          },
        ],
      },
    ],
  },
]);
</script>

<style scoped>
.nav-item {
  @apply -mb-2 pb-2 border-b-2 border-transparent hover:border-black/70 flex items-center space-x-2;
}

.nav-link {
  @apply border-b-2 border-transparent hover:border-black/70 flex items-center space-x-2 cursor-pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
