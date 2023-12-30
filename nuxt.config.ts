// https://nuxt.com/docs/api/configuration/nuxt-config
import { GraphQLClient } from "graphql-request";

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  hooks: {
    async "nitro:config"(nitroConfig) {
      const graphQLClient = new GraphQLClient(
        process.env.SHOPIFY_BASE_URL || "",
        {
          headers: {
            "X-Shopify-Storefront-Access-Token":
              process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN || "",
            Accept: "application/json",
          },
        }
      );

      const { products, blogs } = (await graphQLClient.request(`
      {
        products(first: 250) {
          edges {
            node {
              handle
            }
          }
        }
        blogs(first: 1, query: "news") {
          edges {
            node {
              articles(first: 250) {
                edges {
                  node {
                    handle
                  }
                }
              }
            }
          }
        }
      }
      `)) as any;

      nitroConfig.prerender?.routes?.push(
        "/",
        ...products.edges.map((edge: any) => `/products/${edge.node.handle}`),
        ...blogs.edges[0].node.articles.edges.map(
          (edge: any) => `/blogs/${edge.node.handle}`
        )
      );
    },
  },
  modules: [
    "@nuxtjs/apollo",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "vue3-carousel-nuxt",
    "@pinia/nuxt",
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
