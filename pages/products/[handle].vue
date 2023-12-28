<template>
  <div class="bg-off-white">
    <UContainer class="grid tablet:grid-cols-2 gap-8">
      <VCCarousel :itemsToShow="1" snapAlign="center">
        <VCSlide
          v-for="image in product.images"
          :key="image.url"
          class="max-h-[500px] bg-white"
        >
          <img
            :src="image.url"
            alt="Product image"
            class="h-full w-full object-contain"
          />
        </VCSlide>

        <template #addons="{ slidesCount }">
          <VCPagination />
          <VCNavigation v-if="slidesCount > 1" />
        </template>
      </VCCarousel>
      <div class="space-y-8">
        <h3>
          {{ product.title }}
        </h3>
        <p>
          {{ product.description }}
        </p>

        <div class="flex w-full space-x-4">
          <QuantitySelector v-model="quantity" />
          <AddToCartButton class="w-full" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const quantity = ref(1);

const query = gql`
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
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  images: {
    url: string;
  }[];
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
    images: result.value.product.images?.edges?.map((edge) => edge.node) ?? [],
  };
});
</script>
