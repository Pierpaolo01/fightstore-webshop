<template>
  <div class="min-h-screen relative tablet:pb-[420px] pb-[900px]">
    <Navigation />
    <div class="pt-[72px]">
      <NuxtPage />
    </div>
    <div>
      <SectionFooter class="absolute bottom-0 w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

useSeoMeta({
  title: "The FightStore",
  description:
    "Wij zijn een vechtsport winkel voor al jouw vechtsportartikelen en voedingssupplementen. Wij zijn een shop in shop samen met The Fightstudio, een personal training studio",
  ogTitle: "The FightStore",
  ogDescription:
    "Wij zijn een vechtsport winkel voor al jouw vechtsportartikelen en voedingssupplementen. Wij zijn een shop in shop samen met The Fightstudio, een personal training studio",
  ogImage: "/_nuxt/hero-image.jpg",
  twitterTitle: "The FightStore",
  twitterDescription:
    "Wij zijn een vechtsport winkel voor al jouw vechtsportartikelen en voedingssupplementen. Wij zijn een shop in shop samen met The Fightstudio, een personal training studio",
  twitterImage: "/_nuxt/hero-image.jpg",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "nl",
  },

  script: [
    {
      children: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3852225,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
    },
    {
      children: `window._mfq = window._mfq || [];
        (function() {
          var mf = document.createElement("script");
          mf.type = "text/javascript"; mf.defer = true;
          mf.src = "//cdn.mouseflow.com/projects/7d391ec4-5e29-4558-90e2-a987891e7c8c.js";
          document.getElementsByTagName("head")[0].appendChild(mf);
        })()`,
    },
  ],
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
    font-size: 3rem /* 48px */;
    line-height: 1;
  }
}

h2 {
  @apply text-3xl font-bold;

  @screen tablet {
    font-size: 2.25rem /* 36px */;
    line-height: 2.5rem /* 40px */;
  }
}

h3 {
  @apply text-2xl font-bold;

  @screen tablet {
    font-size: 1.875rem /* 30px */;
    line-height: 2.25rem /* 36px */;
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
    padding-top: 3rem /* 48px */;
    padding-bottom: 3rem /* 48px */;
  }
}
</style>
