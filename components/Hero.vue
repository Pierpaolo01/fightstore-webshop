<template>
  <div class="w-full h-[560px] flex">
    <VCCarousel
      id="hero"
      class="w-full h-full"
      :pauseAutoplayOnHover="false"
      :wrapAround="true"
      :autoplay="8000"
      :mouseDrag="true"
      :touchDrag="true"
      @slideStart="isSliding = true"
      @slideEnd="isSliding = false"
    >
      <VCSlide class="w-full h-[560px] relative">
        <img
          src="/hero-1.jpeg"
          alt="hero image"
          class="h-full w-full object-cover z-10 absolute"
        />
        <UContainer class="h-fit mt-[10%] tablet:w-full z-20">
          <div class="bg-black/40 mx-4 sm:mx-6 tablet:w-fit p-6 rounded-md">
            <div class="flex flex-col items-start text-left space-y-6">
              <h1 class="text-white tablet:text-5xl">
                Bekijk onze <br />
                pre-workouts
              </h1>

              <NuxtLink to="/collections/pre-workouts">
                <Button label="Naar pre-workouts" />
              </NuxtLink>
            </div>
          </div>
        </UContainer>
      </VCSlide>
      <VCSlide class="w-full h-[560px] relative">
        <img
          src="/hero-2.jpeg"
          alt="hero image"
          class="h-full w-full object-cover z-10 absolute"
        />
        <UContainer class="h-fit mt-[10%] tablet:w-full z-20">
          <div class="bg-black/40 mx-4 sm:mx-6 tablet:w-fit p-6 rounded-md">
            <div class="flex flex-col items-start text-left space-y-6">
              <h1 class="text-white tablet:text-5xl">
                Bekijk onze <br />
                kids handschoenen
              </h1>

              <NuxtLink to="/collections/kids-handschoenen">
                <Button label="Naar handschoenen" />
              </NuxtLink>
            </div>
          </div>
        </UContainer>
      </VCSlide>
      <VCSlide class="w-full h-[560px] relative">
        <img
          src="/hero-3.jpeg"
          alt="hero image"
          class="h-full w-full object-cover z-10 absolute"
        />
        <UContainer class="h-fit mt-[10%] tablet:w-full z-20">
          <div class="bg-black/40 mx-4 sm:mx-6 tablet:w-fit p-6 rounded-md">
            <div class="flex flex-col items-start text-left space-y-6">
              <h1 class="text-white tablet:text-5xl">
                Bekijk onze <br />
                handschoenen
              </h1>

              <NuxtLink to="/collections/handschoenen">
                <Button label="Naar handschoenen" />
              </NuxtLink>
            </div>
          </div>
        </UContainer>
      </VCSlide>
    </VCCarousel>
  </div>
</template>

<script setup>
const isSliding = ref(false);
</script>

<style scoped>
.slide {
  @apply h-full w-full;
}
</style>
