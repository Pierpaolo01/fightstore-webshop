<template>
  <Navigation />
  <div class="pt-[80px]">
    <NuxtPage />
  </div>
  <SectionFooter />
</template>

<script setup lang="ts">
useSeoMeta({
  title: "The FightStore",
  description:
    "Wij zijn een vechtsport winkel voor al jouw vechtsportartikelen en voedingssupplementen. Wij zijn een shop in shop samen met The Fightstudio, een personal training studio",
  ogTitle: "The FightStore",
  ogUrl: "https://thefightstore.nl",
  ogDescription:
    "Wij zijn een vechtsport winkel voor al jouw vechtsportartikelen en voedingssupplementen. Wij zijn een shop in shop samen met The Fightstudio, een personal training studio",
  ogImage: "/hero-image.jpg",

  twitterTitle: "The FightStore",
  twitterDescription:
    "Wij zijn een vechtsport winkel voor al jouw vechtsportartikelen en voedingssupplementen. Wij zijn een shop in shop samen met The Fightstudio, een personal training studio",
  twitterImage: "/hero-image.jpg",
  twitterCard: "summary",
});
</script>

<style>
html {
  @apply bg-white font-raleway text-black relative;
  scroll-behavior: smooth;
}

h1 {
  @apply text-4xl font-extrabold;

  @screen tablet {
    @apply text-5xl;
  }
}

h2 {
  @apply text-3xl font-bold;

  @screen tablet {
    @apply text-4xl;
  }
}

h3 {
  @apply text-2xl font-bold;

  @screen tablet {
    @apply text-3xl;
  }
}

h4 {
  @apply text-2xl font-medium;
}

input,
textarea {
  @apply bg-white;
}

.y-padding {
  @apply py-8;

  @screen tablet {
    @apply py-12;
  }
}
</style>
