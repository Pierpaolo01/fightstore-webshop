<template>
  <div>
    <div class="bg-off-white y-padding">
      <UContainer class="grid tablet:grid-cols-2 gap-8">
        <VCCarousel :itemsToShow="1" snapAlign="center">
          <VCSlide
            v-for="image in product.images"
            :key="image.url"
            class="max-h-[500px] bg-white"
          >
            <img :src="image.url" alt="Product image" class="h-full" />
          </VCSlide>

          <template #addons="{ slidesCount }">
            <VCPagination />
            <VCNavigation v-if="slidesCount > 1" />
          </template>
        </VCCarousel>
        <div class="space-y-8">
          <div>
            <h3>
              {{ product.title }}
            </h3>
            <p class="text-lg">
              {{ product.description }}
            </p>
          </div>
          <OptionsSelector
            type="size"
            :options="product.options"
            :selectedOptions="selectedOptions"
            @update:option="addOrUpdateOption($event)"
          />
          <div class="flex w-full space-x-4">
            <QuantitySelector v-model="quantity" />
            <AddToCartButton class="w-full" />
          </div>
        </div>
      </UContainer>
    </div>
    <FeaturedProducts />

    <div class="bg-off-white">
      <UContainer>
        <ContactForm />
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const quantity = ref(1);

const selectedOptions = ref<Record<string, string>[]>([]);

function addOrUpdateOption(option: Record<string, string>) {
  const optionKey = Object.keys(option)[0];

  const existingOptionIndex = selectedOptions.value.findIndex(
    (option) => Object.keys(option)[0] === optionKey
  );

  if (existingOptionIndex !== -1) {
    selectedOptions.value[existingOptionIndex] = option;
  } else {
    selectedOptions.value.push(option);
  }
}

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
      options {
        id
        name
        values
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
  options: {
    id: string;
    name: string;
    values: string[];
  }[];
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
