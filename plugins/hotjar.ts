import VueHotjar from "vue-hotjar-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueHotjar, {
    id: 3852225,
    isProduction: false,
    snippetVersion: 6,
  });
});
