<template>
  <Navigation />
  <NuxtPage />
  <SectionFooter />
</template>

<style>
html {
  @apply bg-white font-raleway text-black;
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
