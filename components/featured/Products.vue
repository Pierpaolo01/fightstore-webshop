<template>
  <UContainer>
    <UCard>
      <template #header>
        <SectionHeading label="uitgelichte producten" />
      </template>
      <VCCarousel
        :breakpoints="carouselBreakpoints"
        :wrapAround="true"
        @slideStart="isSliding = true"
        @slideEnd="isSliding = false"
      >
        <VCSlide v-for="product in products" :key="product.id" class="px-4">
          <ProductCard
            :disabled="isSliding"
            :handle="product.handle"
            :title="product.title"
            :featuredImageUrl="product.featuredImage?.url"
            :minVariantPrice="product.priceRange.minVariantPrice"
          />
        </VCSlide>
        <template #addons>
          <VCNavigation />
          <VCPagination />
        </template>
      </VCCarousel>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const carouselBreakpoints = {
  0: {
    itemsToShow: 1,
    itemsToScroll: 1,
  },
  767: {
    itemsToShow: 3,
    itemsToScroll: 2,
  },
  991: {
    itemsToShow: 4,
    itemsToScroll: 2,
  },
};

const isSliding = ref(false);

const query = gql`
  {
    products(first: 26) {
      edges {
        node {
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
  featuredImage?: {
    url: string;
  };
};

const { result } = useQuery(query);

const products = computed<Product[]>(() => {
  if (!result.value) {
    return [];
  }

  return result.value.products.edges.map((edge) => edge.node);
});
</script>
