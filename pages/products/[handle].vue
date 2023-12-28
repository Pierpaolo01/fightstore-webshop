<template>
  <div class="bg-off-white">
    <!-- <img :src="product?.images?[0].url" alt="" /> -->ok sadsadhasudiashj
  </div>
</template>

<script setup lang="ts">
console.log("here");
</script>
<!-- <script setup lang="ts">
const route = useRoute();

const query = gql`
  query ($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      priceRange {
        minVariantPrice {
          amount
          currencyCode
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

type Product = {
  id: string;
  handle: string;
  title: string;
  priceRange: {
    minVariantPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  images?: {
    url: string;
  };
};

const { result } = useQuery(query, {
  handle: route.params.handle,
});

const product = computed<Product>(() => {
  if (!result.value) {
    return [];
  }

  return {
    ...result.value.product,
    images: result.value.product.images.edges.map((edge) => edge.node),
  };
});
</script> -->
