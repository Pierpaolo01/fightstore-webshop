// https://nuxt.com/docs/api/configuration/nuxt-config
import { GraphQLClient } from "graphql-request";

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  routeRules: {
    "/": { prerender: true },
    "/collections": { swr: 3600 },
    "/products/**": { swr: 60 },
    "/blogs/**": { swr: 3600 },
  },
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

      const products = await fetchAllProducts(graphQLClient);
      const blogs = await fetchAllBlogArticles(graphQLClient);
      const collections = await fetchAllCollections(graphQLClient);
      nitroConfig.prerender?.routes?.push(
        "/",
        ...products.map((product: any) => `/products/${product.handle}`),
        ...blogs.map((blog: any) => `/blogs/${blog.handle}`),
        ...collections.map(
          (collection: any) => `/collections/${collection.handle}`
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
    "nuxt-lodash",
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
      Lato: [400, 500, 600, 700, 800],
    },
  },
  carousel: {
    prefix: "VC",
  },
});

async function fetchAllProducts(graphQLClient) {
  let allProducts = [];
  let lastCursor = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await graphQLClient.request(`
      {
        products(first: 250, after: ${lastCursor ? `"${lastCursor}"` : null}) {
          edges {
            cursor
            node {
              handle
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `);

    const products = response.products.edges.map((edge) => edge.node);
    allProducts = allProducts.concat(products);

    if (response.products.edges.length > 0) {
      lastCursor =
        response.products.edges[response.products.edges.length - 1].cursor;
    }
    hasNextPage = response.products.pageInfo.hasNextPage;
  }

  return allProducts as any;
}

async function fetchAllBlogArticles(graphQLClient) {
  let allArticles = [];
  let lastCursor = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await graphQLClient.request(`
    {
      blogs(first: 1, query: "news") {
        edges {
          node {
            articles(first: 250) {
              edges {
                node {
                  handle
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        }
      }
    }
    `);

    const articles = response.blogs.edges[0].node.articles.edges.map(
      (edge) => edge.node
    );

    allArticles = allArticles.concat(articles);
    const pageInfo = response.blogs.edges[0].node.articles.pageInfo;

    hasNextPage = pageInfo.hasNextPage;
    lastCursor = pageInfo.endCursor;
  }

  return allArticles;
}

//TODO Fetch all collections
async function fetchAllCollections(graphQLClient) {
  let allCollections = [];
  let lastCursor = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await graphQLClient.request(`
      {
        collections(first: 250, after: ${
          lastCursor ? `"${lastCursor}"` : null
        }) {
          edges {
            cursor
            node {
              handle
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `);

    const collections = response.collections.edges.map((edge) => edge.node);
    allCollections = allCollections.concat(collections);

    if (response.collections.edges.length > 0) {
      lastCursor =
        response.collections.edges[response.collections.edges.length - 1]
          .cursor;
    }
    hasNextPage = response.collections.pageInfo.hasNextPage;
  }

  return allCollections as any;
}
