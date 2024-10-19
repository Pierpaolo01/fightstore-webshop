import { GraphQLClient } from "graphql-request";

async function fetchAllProducts(graphQLClient: any) {
  let allProducts: any[] = [];
  let lastCursor = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const response: any = await graphQLClient.request(`
        {
          products(first: 250, after: ${
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

    const products = response.products.edges.map((edge: any) => edge.node);
    allProducts = allProducts.concat(products);

    if (response.products.edges.length > 0) {
      lastCursor =
        response.products.edges[response.products.edges.length - 1].cursor;
    }
    hasNextPage = response.products.pageInfo.hasNextPage;
  }

  return allProducts as any;
}

export default defineSitemapEventHandler(async (e) => {
  const graphQLClient = new GraphQLClient(process.env.SHOPIFY_BASE_URL || "", {
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN || "",
      Accept: "application/json",
    },
  });

  const products = await fetchAllProducts(graphQLClient);

  return products.map((p: any) => {
    return {
      loc: `/products/${p.handle}`,
      lastmod: new Date(),
    };
  });
});
