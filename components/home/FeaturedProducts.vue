<template>
  <UContainer>
    <UCard>
      <template #header>
        <SectionHeading label="uitgelichte producten" />
      </template>
      <VCCarousel :itemsToShow="3.95" :itemsToScroll="2">
        <VCSlide v-for="product in products" :key="product.id">
          <ProductCard
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
const isHovering = ref(false);

const query = gql`
  {
    products(first: 26) {
      edges {
        node {
          id
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
