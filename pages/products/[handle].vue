<template>
  <div>
    <div class="bg-off-white y-padding" v-if="product">
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
            <AddToCartButton
              class="w-full"
              @click="addProductToCart()"
              :isAddingToCart="isAddingToCart"
            />
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

const { product, refetch } = useProduct(route.params.handle);
const { isAddingToCart, addToCart } = useAddOrUpdateCart();

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

const addProductToCart = async () => {
  const variantId = findVariantId();

  if (!variantId) {
    return; //TODO show error
  }

  await addToCart(variantId, quantity.value);
};
</script>
