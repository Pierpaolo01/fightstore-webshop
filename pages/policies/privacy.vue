<template>
  <UContainer class="y-padding space-y-6">
    <div class="space-y-2">
      <h6 class="font-bold uppercase">Privacybeleid</h6>

      <p>
        Bij The Fightstore hechten we veel waarde aan uw privacy en het
        beschermen van uw persoonsgegevens. Deze privacyverklaring is opgesteld
        om u te informeren over hoe wij omgaan met de gegevens die u ons
        verstrekt wanneer u onze website bezoekt en aankopen doet.
        <br />
        <br />
        We verzamelen alleen de informatie die noodzakelijk is voor het
        uitvoeren van uw bestelling en het communiceren met u over de status van
        uw bestelling.
      </p>
    </div>
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
  ],
});
</script>

<style scoped>
strong {
  font-weight: bold;
}

ul {
  padding-left: 20px;
  list-style: disc !important;
}

ul li {
  margin-bottom: 0.5em;
}

a {
  color: #3182ce;
  text-decoration: underline;
}
</style>
