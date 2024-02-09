<template>
  <UContainer class="y-padding laptop:space-y-20 space-y-12">
    <div
      class="w-full py-12 flex relative justify-center items-center shadow-lg rounded-md overflow-hidden"
    >
      <div class="absolute w-full h-full z-20 gradient"></div>
      <UContainer class="text-white z-40">
        <div class="space-y-5">
          <h2>Personal training</h2>
          <p>
            Ontdek onze persoonlijke en kleine groepstrainingen, perfect
            afgestemd op jouw unieke fitnessdoelen, van afvallen tot
            wedstrijdklaar worden. Leer de basis van kickboksen en boksen, bouw
            spiermassa op, en bereik de topvorm die je altijd al wilde.
          </p>
          <ul>
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
          <p class="font-currency font-normal mb-2">50 incl BTW</p>
          <p class="font-bold mb-4">
            Ideaal voor iedereen die een op maat gemaakte aanpak zoekt om
            persoonlijke fitnessdoelen te bereiken.
          </p>
          <p>
            Ontdek de kracht van maatwerk met onze Personal Training. Of je nu
            spiermassa wilt opbouwen, afvallen, of simpelweg fitter wilt worden,
            onze experts stellen een programma samen dat perfect bij jou past.
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
          <p class="font-currency font-normal mb-2">50 incl BTW</p>
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
    <div class="grid laptop:grid-cols-2 y-padding" id="contact-us">
      <div>
        <ContactForm class="w-full" />
      </div>
      <div class="py-8 space-y-8">
        <div>
          <h3 class="mb-4">Bel ons:</h3>
          <div class="flex gap-x-12">
            <div>
              <h5 class="block text-gray-700 font-bold mb-2">Almere</h5>
              <a href="tel:0641763393" class="text-blue-500 hover:underline"
                >+31 6 41763393</a
              >
            </div>
            <div>
              <h5 class="block text-gray-700 font-bold mb-2">Hilversum</h5>
              <a href="tel:0639735604" class="text-blue-500 hover:underline">
                +31 6 39735604</a
              >
            </div>
          </div>
        </div>
        <div>
          <h3 class="mb-4">Mail ons:</h3>
          <div class="flex gap-12">
            <div>
              <a
                href="mailto:info@fightstore036.nl"
                class="text-blue-500 hover:underline"
              >
                info@fightstore036.nl
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 class="mb-4">Bezoek ons:</h3>
          <div class="flex flex-col laptop:flex-row gap-4 gap-y-12">
            <div class="w-full">
              <h5 class="block text-gray-700 font-bold mb-2">Almere</h5>
              <p class="text-sm mb-4 font-semibold leading-relaxed">
                Schoutenstraat 8, 1211 BM Hilversum
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.9887457544596!2d5.1701883783173255!3d52.22542227198549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66b4c8b38450f%3A0xc75cd5427a0de481!2sTHE%20FIGHTSTORE%20035!5e0!3m2!1sen!2snl!4v1707224161795!5m2!1sen!2snl"
                style="border: 0"
                allowfullscreen="false"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-fit"
              ></iframe>
            </div>
            <div class="w-full">
              <h5 class="block text-gray-700 font-bold mb-2">Hilversum</h5>
              <p class="text-sm mb-4 font-semibold leading-relaxed">
                Bottelaarpassage 4, 1315 ES Almere
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.016270876568!2d5.2130248783206925!3d52.37012497202233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6171749778ed1%3A0xb0c46ac226e9364b!2sTHE%20FIGHTSTORE%20036!5e0!3m2!1sen!2snl!4v1707224630874!5m2!1sen!2snl"
                style="border: 0"
                allowfullscreen="false"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
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
