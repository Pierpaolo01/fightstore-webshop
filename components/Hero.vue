<template>
  <div class="w-full h-[720px] flex relative">
    <img
      src="/hero-image.jpg"
      alt="hero image"
      class="absolute h-full w-full object-cover z-10"
    />
    <UContainer class="h-fit mt-[10%] tablet:w-full z-20">
      <div class="bg-black/20 mx-4 sm:mx-6 tablet:w-[550px] p-6 rounded-md">
        <div class="flex flex-col items-start text-left space-y-6">
          <h1 class="text-white tablet:text-5xl">
            Personal Training, Maximum Results
          </h1>
          <p class="text-white">
            Bij Fightstudio 036 sta jij centraal. Of je nu individueel traint,
            met een groep, of je voorbereidt op een gevecht, wij zorgen dat je
            het beste uit jezelf haalt
          </p>
          <Button label="Ontdek Onze Lessen" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup></script>
