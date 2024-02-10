<template>
  <UContainer class="y-padding space-y-6">
    <div class="space-y-2">
      <h6 class="font-bold">RETOURBELEID VAN THE FIGHTSTORE</h6>

      <p>
        Bij The Fightstore streven we naar
        <span class="font-currency font-light">100%</span> klanttevredenheid bij
        al onze producten. We begrijpen echter dat er soms redenen kunnen zijn
        waarom je een product wilt retourneren of ruilen. Hieronder vind je onze
        retourvoorwaarden.
      </p>
    </div>
    <div class="space-y-2">
      <h6 class="font-bold">RETOURTERMIJN</h6>
      <p>
        Je hebt <span class="font-currency">14</span> dagen vanaf de datum van
        ontvangst om een product te retourneren.
      </p>
    </div>
    <div class="space-y-2">
      <h6 class="font-bold">VOORWAARDEN VOOR RETOURNEREN</h6>
      <p>
        Om in aanmerking te komen voor retournering, moet het product aan de
        volgende voorwaarden voldoen: 
        
        <ul class="mt-2">
            <li>
                Het product moet in de originele
                verpakking zijn.
            </li>
            <li>
                Het product moet ongedragen zijn en voorzien van de
                originele tags en hangers.
            </li>
        </ul>

        <strong>Let op:</strong> Producten binnen de supplement of voeding categorie kunnen niet worden geretourneerd.
      </p>
    </div>
    <div class="space-y-2">
      <h6 class="font-bold">VERZENDKOSTEN</h6>
      <p>
        Verzendkosten dienen door de klant te worden betaald.
      </p>
    </div>
    <div class="space-y-2">
      <h6 class="font-bold">RETOURPROCES</h6>
      <p>
        Om een retour aan te vragen, neem contact met ons op via <a href="mailto:info@fightstore036.nl">info@fightstore036.nl</a>, <br>
        <strong>Vermeld je bestelnummer, retour artikel en de reden voor retournering.</strong>
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