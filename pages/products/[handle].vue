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
          <div class="flex items-center space-x-4 divide-x-2">
            <OptionsSelector
              type="size"
              :options="product.options"
              :selectedOptions="selectedOptions"
              @update:option="addOrUpdateOption($event)"
            />
            <OptionsDropdown
              class="pl-4"
              type="color"
              :options="product.options"
              :selectedOptions="selectedOptions"
              @update:option="addOrUpdateOption($event)"
            />
          </div>
          <div
            class="laptop:flex w-full space-y-4 laptop:space-y-0 laptop:space-x-4"
          >
            <QuantitySelector v-model="quantity" />
            <AddToCartButton class="w-full" @click="findVariantId()" />
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

const findVariantId = () => {
  const userSelectedOptions = selectedOptions.value.reduce((acc, option) => {
    const key = Object.keys(option)[0];
    acc[key] = option[key];
    return acc;
  }, {});

  return product.value.variants.find((variant) => {
    return variant.selectedOptions.every((selectedOption) => {
      return (
        userSelectedOptions[selectedOption.name.toLowerCase()] ===
        selectedOption.value
      );
    });
  })?.id;
};

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
    variants:
      result.value.product.variants?.edges?.map((edge) => edge.node) ?? [],
  };
});
</script>
