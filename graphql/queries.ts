export const GetProductQuery = gql`
  query ($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      description
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
            price {
              amount
              currencyCode
            }
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
`;

export type Product = {
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
    price: {
      amount: number;
      currencyCode: string;
    };
    quantityAvailable: number;
    availableForSale: boolean;
    selectedOptions: {
      value: string;
      name: string;
    }[];
  }>;
  images: {
    url: string;
  }[];
};

export const CreateCartMutation = gql`
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
      }
    }
  }
`;

export const AddToCartMutation = gql`
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        totalQuantity
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const GetCartTotalQuery = gql`
  query ($id: ID!) {
    cart(id: $id) {
      totalQuantity
    }
  }
`;

export const GetCartDetailQuery = gql`
  query ($id: ID!) {
    cart(id: $id) {
      checkoutUrl
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
      }
      lines(first: 250) {
        edges {
          node {
            id
            quantity
            cost {
              subtotalAmount {
                amount
                currencyCode
              }
            }
            merchandise {
              ... on ProductVariant {
                id
                title
                availableForSale
                quantityAvailable
                image {
                  url
                }
                selectedOptions {
                  value
                }
                product {
                  title
                  id
                }
                price {
                  amount
                  currencyCode
                }
              }
            }
            attributes {
              key
              value
            }
          }
        }
      }
      totalQuantity
    }
  }
`;

export type CartDetail = {
  checkoutUrl: string;
  cost: {
    totalAmount: {
      amount: number;
      currencyCode: string;
    };
    subtotalAmount: {
      amount: number;
      currencyCode: string;
    };
    totalTaxAmount: {
      amount: number;
      currencyCode: string;
    };
  };
  lines: Array<{
    id: string;
    quantity: number;
    cost: {
      subtotalAmount: {
        amount: number;
        currencyCode: string;
      };
    };
    merchandise: {
      id: string;
      title: string;
      availableForSale: boolean;
      quantityAvailable?: number;
      image?: {
        url: string;
      };
      selectedOptions: Array<{
        value: string;
      }>;
      product: {
        title: string;
        id: string;
      };
      price: {
        amount: number;
        currencyCode: string;
      };
    };
    attributes: {
      key: string;
      value: string;
    };
  }>;
  totalQuantity: number;
};

export const UpdateCartLineMutation = gql`
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
      }
    }
  }
`;

export const RemoveCartLineMutation = gql`
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
      }
    }
  }
`;
