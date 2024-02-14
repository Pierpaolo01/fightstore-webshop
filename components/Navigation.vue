<template>
  <div
    class="fixed top-0 w-full bg-white z-50 shadow-md"
    :class="{ 'shadow-2xl': currentNavItem }"
  >
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
              class="nav-item group cursor-default"
              @mouseover="currentNavItem = navItem"
            >
              <span class="flex items-center space-x-1">
                <span>{{ navItem.title }}</span>
                <IconChevron
                  class="h-4 -rotate-90 group-hover:rotate-0 duration-200 stroke-2"
                  :class="{
                    'rotate-0': currentNavItem?.title === navItem.title,
                  }"
                />
              </span>
            </div>
          </div>
          <Cart />
        </div>
      </div>
      <Transition name="fade">
        <div
          v-if="currentNavItem"
          class="hidden laptop:grid grid-cols-3 gap-x-8 gap-y-4 items-start pt-6 pb-8 relative"
        >
          <button
            class="absolute top-0 right-0 hover:bg-slate-200 rounded-md"
            @click="currentNavItem = undefined"
          >
            <IconClose />
          </button>
          <div
            class="min-w-[30%]"
            v-for="section in currentNavItem.sections"
            :key="section.title"
          >
            <div>
              <h4 class="font-bold mb-4">
                {{ section.title }}
              </h4>
              <ul class="space-y-2 font-roboto">
                <li v-for="item in section.items" :key="item.title">
                  <NuxtLink class="nav-link w-fit" :to="item.handle">
                    {{ item.title }}
                  </NuxtLink>
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
