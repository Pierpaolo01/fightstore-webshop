<template>
  <div>
    <UContainer>
      <div class="flex justify-between items-center py-4">
        <div class="h-12">
          <img src="/logo.png" alt="store logo" class="h-12" />
        </div>
        <div class="space-x-6 flex items-center">
          <div
            class="font-roboto font-semibold text-lg text-black/70 space-x-6 flex items-center"
          >
            <NuxtLink to="/#about-us" class="nav-item"
              ><span>Over ons</span></NuxtLink
            >
            <NuxtLink to="/" class="nav-item group">
              <span>Fightgear</span>
              <IconChevron
                class="h-4 -rotate-90 group-hover:rotate-0 duration-200 stroke-2"
              />
            </NuxtLink>
            <NuxtLink to="/" class="nav-item group">
              <span>Trainingen</span>
              <IconChevron
                class="h-4 -rotate-90 group-hover:rotate-0 duration-200 stroke-2"
              />
            </NuxtLink>
            <NuxtLink to="/" class="nav-item group">
              <span>Voeding</span>
              <IconChevron
                class="h-4 -rotate-90 group-hover:rotate-0 duration-200 stroke-2"
              />
            </NuxtLink>
          </div>
          <ClientOnly>
            <Cart :cartId="cartId" />
          </ClientOnly>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const showFightgearMenu = ref(false);

const cartId = ref<string | null>();

onMounted(async () => {
  const storedCartId = localStorage.getItem("fight-store-cart-id");
  if (storedCartId) {
    cartId.value = storedCartId;
  }
});
</script>

<style scoped>
.nav-item {
  @apply -mb-2 pb-2 border-b-2 border-transparent hover:border-black/70 flex items-center space-x-2;
}
</style>
