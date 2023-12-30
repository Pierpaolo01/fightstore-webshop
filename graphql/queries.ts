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
  variants: {
    id: string;
    selectedOptions: {
      value: string;
      name: string;
    }[];
  }[];
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

export const GetCartQuery = gql`
  query ($id: ID!) {
    cart(id: $id) {
      totalQuantity
      checkoutUrl
    }
  }
`;
