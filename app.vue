<template>
  <HomeCollections />
</template>

<script setup></script>

<style>
html {
  @apply bg-white font-raleway;
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
</style>
