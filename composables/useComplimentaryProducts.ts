import { GraphQLClient } from "graphql-request";

const query = gql`
  query ProductRecommendations(
    $productId: ID!
    $intent: ProductRecommendationIntent!
  ) {
    productRecommendations(productId: $productId, intent: $intent) {
      id
      handle
      title
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      featuredImage {
        url
      }
      variants {
        id
      }
    }
  }
`;

export const useComplimentaryProducts = () => {
  const config = useRuntimeConfig();

  const complimentaryProducts = ref<any[]>([]);

  const getComplimentaryProducts = async (ids: string[]) => {
    const graphQLClient = new GraphQLClient(
      config.public.SHOPIFY_BASE_URL || "",
      {
        headers: {
          "X-Shopify-Storefront-Access-Token":
            config.public.SHOPIFY_PUBLIC_ACCESS_TOKEN || "",
          Accept: "application/json",
        },
      }
    );

    const query = `
      query ProductRecommendations($productId: ID!, $intent: ProductRecommendationIntent!) {
        productRecommendations(productId: $productId, intent: $intent) {
          id
          handle
          title
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
          }
          variants(first: 250) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `;

    const results = await Promise.all(
      ids.map(async (id) => {
        try {
          const data = (await graphQLClient.request(query, {
            productId: id,
            intent: "COMPLEMENTARY",
          })) as any;

          return data.productRecommendations;
        } catch (error) {
          console.error("Error fetching complimentary products:", error);
          return [];
        }
      })
    );

    complimentaryProducts.value = results.flat().reduce((acc, cur) => {
      const exists = acc.find((item) => item.handle === cur.handle);
      if (!exists) {
        acc.push({
          ...cur,
          variants: cur.variants.edges.map((edge: any) => edge.node.id),
        });
      }
      return acc;
    }, []);
  };

  return { complimentaryProducts, getComplimentaryProducts };
};
