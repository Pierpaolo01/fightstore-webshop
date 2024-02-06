<template>
  <div class="w-full bg-off-white y-padding" id="about-us">
    <UContainer>
      <UCard>
        <template #header>
          <SectionHeading label="over ons" />
        </template>
        <div
          class="flex flex-col space-y-8 tablet:flex-row tablet:space-y-0 tablet:space-x-8 tablet:justify-between"
        >
          <div class="flex-shrink space-y-4 tablet:w-7/12 tablet:space-y-12">
            <h3>The Fightstore, Een Begrip In Almere!</h3>
            <p>
              In december 2019 hebben wij onze deuren geopend en inmiddels zijn
              wij een begrip in Almere. Wij streven ernaar om de beste producten
              aan onze klanten te bieden. The Fightstore bevindt zich in hartje
              Almere-stad. Wij zijn een vechtsport winkel voor al jouw
              vechtsportartikelen en voedingssupplementen. Wij zijn een shop in
              shop samen met The Fightstudio, een personal training studio.
            </p>
          </div>
          <div>
            <img
              src="/about-us.jpg"
              alt="about us image"
              class="rounded-lg shadow-lg w-full max-w-[380px]"
            />
          </div>
        </div>
      </UCard>
    </UContainer>
  </div>

  <div class="w-full h-[650px] relative bg-cover bg-center">
    <div class="gradient absolute w-full h-full">
      <!--       :wrapAround="true"
        :autoplay="6000" -->
      <VCCarousel
        :pauseAutoplayOnHover="true"
        @slideStart="isSliding = true"
        @slideEnd="isSliding = false"
      >
        <VCSlide class="w-full" :class="'w-full '">
          <UContainer
            class="y-padding z-20 text-white h-full w-full flex justify-end"
          >
            <div class="max-w-[624px] space-y-4 bg-black/20 h-fit p-6 rounded">
              <h2 class="font-bold">Ontdek Onze Winkels!</h2>
              <p class="text-lg font-semibold leading-relaxed">
                Bezoek onze twee unieke locaties en ervaar de persoonlijke
                service en expertise die onze winkels te bieden hebben. In elke
                winkel vind je een uitgebreide selectie van onze producten, die
                je kunt zien, voelen en uitproberen voordat je koopt. Kom
                gezelig langs en bekijk de mogelijkheden. We kijken ernaar uit
                je te verwelkomen!
              </p>
            </div>
          </UContainer>
        </VCSlide>

        <VCSlide class="px-4 h-auto flex items-center justify-end">
          <UContainer class="slider-container y-padding">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.9887457544596!2d5.1701883783173255!3d52.22542227198549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66b4c8b38450f%3A0xc75cd5427a0de481!2sTHE%20FIGHTSTORE%20035!5e0!3m2!1sen!2snl!4v1707224161795!5m2!1sen!2snl"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="tablet:w-[500px] tablet:h-[382px] w-[250px] h-[191px]"
            ></iframe>
            <div class="max-w-[624px] space-y-4 bg-black/20 h-fit p-6 rounded">
              <h2 class="font-bold">Hilversum</h2>
              <p class="text-lg font-semibold leading-relaxed">
                Schoutenstraat 8, 1211 BM Hilversum
              </p>
            </div>
          </UContainer>
        </VCSlide>

        <VCSlide class="px-4 h-auto flex flex-col items-center">
          <UContainer class="slider-container y-padding">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.016270876568!2d5.2130248783206925!3d52.37012497202233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6171749778ed1%3A0xb0c46ac226e9364b!2sTHE%20FIGHTSTORE%20036!5e0!3m2!1sen!2snl!4v1707224630874!5m2!1sen!2snl"
              style="border: 0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="tablet:w-[500px] tablet:h-[382px] w-[250px] h-[191px]"
            ></iframe>
            <div class="max-w-[624px] space-y-4 bg-black/20 h-fit p-6 rounded">
              <h2 class="font-bold">Almere</h2>
              <p class="text-lg font-semibold leading-relaxed">
                Bottelaarpassage 4, 1315 ES Almere
              </p>
            </div>
          </UContainer>
        </VCSlide>
      </VCCarousel>
    </div>
  </div>
</template>

<script setup lang="ts">
const isSliding = ref(false);
</script>

<style scoped>
.gradient {
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("/our-store.jpg");
  background-size: cover;
  background-position: center;
}
</style>

<style scoped>
.slider-container {
  @apply z-20 text-white h-full w-full flex flex-col items-center justify-between tablet:flex-row gap-6;
}
</style>
