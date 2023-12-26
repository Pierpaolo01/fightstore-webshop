// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo", "@nuxt/ui", "@nuxtjs/tailwindcss"],
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
});
