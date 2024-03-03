<template>
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
            <h5 class="block text-gray-700 font-bold mb-2">Hilversum</h5>
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
            <h5 class="block text-gray-700 font-bold mb-2">Almere</h5>
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
</template>
