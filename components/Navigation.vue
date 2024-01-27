<template>
  <div class="fixed top-0 w-full bg-white z-50">
    <UContainer @mouseleave="currentNavItem = undefined">
      <div class="flex justify-between items-center py-4">
        <div
          class="laptop:hidden cursor-pointer p-2 pl-0"
          @click="showMobileMenu = !showMobileMenu"
        >
          <IconMenu />
        </div>
        <NuxtLink to="/" class="">
          <img src="/logo.png" alt="store logo" class="w-36 laptop:w-52" />
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
              <span class="flex items-center space-x-1">
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
        <div
          v-if="currentNavItem"
          class="hidden laptop:flex flex-wrap gap-4 items-start"
        >
          <div
            class="min-w-[25%]"
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

  <MobileMenu
    v-model="showMobileMenu"
    @update:modelValue="showMobileMenu = $event"
  />
</template>

<script setup lang="ts">
import navItems from "~/data/navigation.json";

const currentNavItem = ref();
const navigationData = navItems;

const showMobileMenu = ref(false);
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
