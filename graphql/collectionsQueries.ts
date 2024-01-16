export const CollectionQuery = gql`
  query ($handle: String!, $filters: [ProductFilter!]) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(first: 250, filters: $filters) {
        filters {
          type
          values {
            count
            input
          }
        }
        edges {
          node {
            id
            handle
            title
            description
            featuredImage {
              url
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            options {
              id
              name
              values
            }
            variants(first: 250) {
              edges {
                node {
                  id
                  quantityAvailable
                  availableForSale
                  selectedOptions {
                    value
                    name
                  }
                }
              }
            }
            images(first: 10) {
              edges {
                node {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export type Collection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  products: {
    filters: Array<{
      type: string;
      values: Array<{
        count: number;
        input: string;
      }>;
    }>;
    edges: Array<{
      id: string;
      handle: string;
      title: string;
      description: string;
      priceRange: {
        minVariantPrice: {
          amount: number;
          currencyCode: string;
        };
      };
      options: {
        id: string;
        name: string;
        values: string[];
      }[];
      variants: Array<{
        id: string;
        quantityAvailable: number;
        availableForSale: boolean;
        selectedOptions: Array<{
          value: string;
          name: string;
        }>;
      }>;
      images: Array<{
        url: string;
      }>;
    }>;
  };
};
