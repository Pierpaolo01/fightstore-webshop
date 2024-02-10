<template>
  <Hero />
  <FeaturedCollections />
  <FeaturedProducts />
  <SectionAboutUs />
  <SectionBlog />
  <UContainer>
    <SectionContactUs />
  </UContainer>
</template>

<script setup lang="ts">
useHead({
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
