<template>
  <UContainer class="y-padding laptop:space-y-20 space-y-12">
    <div
      class="w-full py-12 flex relative justify-center items-center shadow-lg rounded-md overflow-hidden"
    >
      <div class="absolute w-full h-full z-20 gradient"></div>
      <UContainer class="text-white z-40">
        <div class="space-y-5">
          <h2>Personal training</h2>
          <p class="font-semibold">
            Ontdek onze persoonlijke en kleine groepstrainingen, perfect
            afgestemd op jouw unieke fitnessdoelen, van afvallen tot
            wedstrijdklaar worden. Leer de basis van kickboksen en boksen, bouw
            spiermassa op, en bereik de topvorm die je altijd al wilde.
          </p>
          <ul class="font-semibold">
            <li>Volledig gepersonaliseerd programma</li>
            <li>Eén-op-één begeleiding</li>
            <li>Flexibele planning naar jouw beschikbaarheid</li>
            <li>Meetbare resultaten en voortgang</li>
          </ul>
        </div>
      </UContainer>
    </div>
    <div class="grid gap-y-12 laptop:gap-4 laptop:grid-cols-3">
      <div class="card-container">
        <div>
          <img
            src="/personal-training-cover.avif"
            alt=""
            class="selection-image"
          />

          <h4 class="card-title">PERSONAL TRAININGEN</h4>
          <p class="font-currency font-normal mb-2">65 incl BTW per les</p>
          <p class="font-bold mb-4">
            Ideaal voor iedereen die een op maat gemaakte aanpak zoekt om
            persoonlijke fitnessdoelen te bereiken.
          </p>
          <p>
            Ontdek de kracht van maatwerk met onze Personal Training. Of je nu
            spiermassa wilt opbouwen, afvallen, of simpelweg fitter wilt worden,
            wij stellen een programma samen dat perfect bij jou past.
          </p>
          <ul>
            <li>Wedstrijdspecifieke training</li>
            <li>Techniek en tactiek verbetering</li>
            <li>Conditionele voorbereiding</li>
            <li>Mentale weerbaarheidstraining</li>
          </ul>
        </div>
        <NuxtLink to="#contact-us">
          <button class="learn-more-button">Ik wil meer weten!</button>
        </NuxtLink>
      </div>
      <div class="card-container">
        <div>
          <img src="/fight-ready.avif" alt="" class="selection-image" />

          <h4 class="card-title">GET FIGHT READY</h4>
          <p class="font-currency font-normal mb-2">65 incl BTW per les</p>
          <p class="font-bold mb-4">
            Perfect voor vechtsporters die zich optimaal willen voorbereiden op
            hun volgende competitie of wedstrijd.
          </p>
          <p>
            Stap in de ring met vertrouwen. Onze 'Get Fight Ready'-training is
            speciaal ontworpen om vechters op elk niveau voor te bereiden op hun
            volgende wedstrijd, met focus op techniek, conditie en strategie.
          </p>
          <ul>
            <li>Wedstrijdspecifieke training</li>
            <li>Techniek en tactiek verbetering</li>
            <li>Conditionele voorbereiding</li>
            <li>Mentale weerbaarheidstraining</li>
          </ul>
        </div>
        <NuxtLink to="#contact-us">
          <button class="learn-more-button">Ik wil meer weten!</button>
        </NuxtLink>
      </div>
      <div class="card-container">
        <div>
          <img src="/duo-training.avif" alt="" class="selection-image" />

          <h4 class="card-title">DUO TRAININGEN</h4>
          <p class="font-currency font-normal mb-2">50 incl BTW p.p</p>
          <p class="font-bold mb-4">
            Ideaal voor vrienden, familieleden of collega's die samen willen
            trainen en elkaar willen motiveren.
          </p>
          <p>
            Ervaar de motivatie van samen trainen met onze Small Group
            Trainingen. Perfect voor wie de gezelligheid van een groep zoekt
            maar de aandacht van personal training niet wil missen. Bouw samen
            aan jullie doelen in een energieke en ondersteunende omgeving.
          </p>
          <ul>
            <li>Kleine groepen voor persoonlijke aandacht</li>
            <li>Gevarieerde en uitdagende workouts</li>
            <li>Samen sterker: de kracht van groepsmotivatie</li>
            <li>Toegankelijk voor alle niveaus</li>
          </ul>
        </div>
        <NuxtLink to="#contact-us">
          <button class="learn-more-button">Ik wil meer weten!</button>
        </NuxtLink>
      </div>
    </div>
    <SectionContactUs />
  </UContainer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

useSeoMeta({
  title: "Personal training",
  description: `Ontdek onze persoonlijke en kleine groepstrainingen, perfect
            afgestemd op jouw unieke fitnessdoelen, van afvallen tot
            wedstrijdklaar worden. Leer de basis van kickboksen en boksen, bouw
            spiermassa op, en bereik de topvorm die je altijd al wilde.`,
  ogTitle: "Personal training",
  ogDescription: `Ontdek onze persoonlijke en kleine groepstrainingen, perfect
            afgestemd op jouw unieke fitnessdoelen, van afvallen tot
            wedstrijdklaar worden. Leer de basis van kickboksen en boksen, bouw
            spiermassa op, en bereik de topvorm die je altijd al wilde.`,
  ogImage: "/_nuxt/personal-training.jpeg",
  twitterTitle: "Personal training",
  twitterDescription: `Ontdek onze persoonlijke en kleine groepstrainingen, perfect
            afgestemd op jouw unieke fitnessdoelen, van afvallen tot
            wedstrijdklaar worden. Leer de basis van kickboksen en boksen, bouw
            spiermassa op, en bereik de topvorm die je altijd al wilde.`,
  twitterImage: "/_nuxt/personal-training.jpeg",
  twitterCard: "summary",
});
</script>

<style scoped>
.gradient {
  background-image: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("/personal-training.jpeg");
  background-size: cover;
  background-position: center;
}

.selection-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  @apply rounded-md shadow-md mb-4;
}

ul {
  padding-left: 20px;
  list-style: disc !important;
  @apply mt-4;
}

ul li {
  margin-bottom: 0.5em;
}

.card-container {
  @apply flex flex-col justify-between gap-4;
}

.card-title {
  @apply italic mb-4;
}

.learn-more-button {
  @apply font-bold bg-green-500 rounded shadow-md py-2 px-4 text-slate-100 w-fit hover:scale-105 transition-all duration-100;
}
</style>
