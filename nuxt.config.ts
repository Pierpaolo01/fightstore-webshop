// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/apollo",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "vue3-carousel-nuxt",
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.SHOPIFY_BASE_URL || "",
        tokenStorage: "cookie",
        httpLinkOptions: {
          headers: {
            "X-Shopify-Storefront-Access-Token":
              process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN || "",
            Accept: "application/json",
          },
        },
      },
    },
  },
  googleFonts: {
    families: {
      Roboto: [400, 500, 600, 700, 800],
      Raleway: [400, 500, 600, 700, 800],
    },
  },
  carousel: {
    prefix: "VC",
  },
});
