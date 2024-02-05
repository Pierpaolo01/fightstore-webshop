<template>
  <UContainer class="y-padding">
    <UCard>
      <template #header>
        <SectionHeading label="Vergelijkbare producten" />
      </template>
      <VCCarousel
        :breakpoints="carouselBreakpoints"
        :wrapAround="true"
        @slideStart="isSliding = true"
        @slideEnd="isSliding = false"
      >
        <VCSlide
          v-for="product in products"
          :key="product.id"
          class="px-4 h-auto"
        >
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
const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
});

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

const { result } = useQuery(query, {
  productId: props.productId,
  intent: "RELATED",
});

const products = computed<Product[]>(() => {
  if (!result.value) {
    return [];
  }

  return result.value.productRecommendations;
});
</script>

<style scoped>
:deep(.carousel__slide) {
  @apply h-[350px];

  @media tablet {
    @apply h-[220px];
  }
}
</style>
