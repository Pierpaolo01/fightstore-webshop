<template>
  <div>
    <div class="bg-off-white y-padding" v-if="product">
      <UContainer class="grid tablet:grid-cols-2 gap-8">
        <VCCarousel
          :itemsToShow="1"
          snapAlign="center"
          v-if="product.images.length"
        >
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
        <div class="space-y-8 tablet:col-start-2">
          <div class="space-y-5">
            <h3>
              {{ product.title }}
            </h3>
            <p class="text-lg">
              {{ product.description }}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-4">
            <OptionsSelector
              type="grootte"
              :options="product.options"
              :selectedOptions="selectedOptions"
              @update:option="addOrUpdateOption($event)"
            />
            <OptionsSelector
              type="maat"
              :options="product.options"
              :selectedOptions="selectedOptions"
              @update:option="addOrUpdateOption($event)"
            />
            <OptionsDropdown
              label="Kies een materiaal"
              type="materiaal"
              :options="product.options"
              :selectedOptions="selectedOptions"
              @update:option="addOrUpdateOption($event)"
            />
            <OptionsDropdown
              label="Kies een kleur"
              type="kleur"
              :options="product.options"
              :selectedOptions="selectedOptions"
              @update:option="addOrUpdateOption($event)"
            />
            <OptionsDropdown
              label="Kies een smaak"
              type="smaak"
              :options="product.options"
              :selectedOptions="selectedOptions"
              @update:option="addOrUpdateOption($event)"
            />
          </div>
          <UAlert
            v-if="
              variantId &&
              !product.variants.find((variant) => variant.id === variantId)
                ?.availableForSale
            "
            icon="i-heroicons-exclamation-circle"
            color="red"
            variant="soft"
            title="Helaas is deze article/variant momenteel niet op voorraad"
          />
          <ClientOnly>
            <div>
              <p class="font-currency mb-4">
                {{ variantPrice }}
              </p>
              <div
                class="laptop:flex w-full space-y-4 laptop:space-y-0 laptop:space-x-4"
              >
                <QuantitySelector v-model="quantity" />
                <AddToCartButton
                  :isDisabled="addToCartIsDisabled"
                  :isAddingToCart="isAddingToCart"
                  @click="addProductToCart()"
                />
              </div>
            </div>
          </ClientOnly>
        </div>
      </UContainer>
    </div>

    <FeaturedProductsRecommendation
      v-if="product && product.id"
      :product-id="product.id"
    />

    <div class="bg-off-white">
      <UContainer class="y-padding">
        <ClientOnly>
          <ContactForm class="mx-auto" />
        </ClientOnly>
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { product } = useProduct(route.params.handle);
const { isAddingToCart, addToCart } = useAddOrUpdateCart();

const quantity = ref(1);

const selectedOptions = ref<Record<string, string>[]>([]);
const variantId = ref<string>();
const selectedVariant = ref();

const addToCartIsDisabled = computed(() => {
  return (
    !variantId.value ||
    !product.value.variants.find((variant) => variant.id === variantId.value)
      ?.availableForSale
  );
});

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

const addProductToCart = async () => {
  if (!variantId.value) return;

  await addToCart(variantId.value, quantity.value);
};

const findVariantId = () => {
  if (product.value.variants[0]?.selectedOptions[0]?.value === "Default Title")
    variantId.value = product.value.variants[0].id;

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

watch(
  selectedOptions.value,
  () => {
    variantId.value = findVariantId();
    selectedVariant.value = product.value.variants.find(
      (variant) => variant.id === variantId.value
    );
  },
  { deep: true }
);

const updateSeoMeta = () =>
  useSeoMeta({
    title: () => `${product.value?.title}`,
    description: () => `${product.value?.description}`,
    ogTitle: () => `${product.value?.title}`,
    ogDescription: () => `${product.value?.description}`,
    ogImage: () =>
      `${product.value?.images.length ? product.value?.images[0].url : ""}`,
    twitterTitle: () => `${product.value?.title}`,
    twitterDescription: () => `${product.value?.description ?? ""}`,
    twitterImage: () =>
      `${product.value?.images.length ? product.value?.images[0].url : ""}`,
    twitterCard: "summary",
  });

watch(
  product,
  (value) => {
    if (!value) return;

    if (value.variants[0]?.selectedOptions[0]?.value === "Default Title") {
      variantId.value = value.variants[0].id;
    }

    updateSeoMeta();
  },
  { deep: true, immediate: true }
);

const variantPrice = computed(() => {
  const selectedVariant = product.value.variants.find(
    (variant) => variant.id === variantId.value
  );

  if (!selectedVariant) return;

  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(selectedVariant?.price.amount);
});

updateSeoMeta();

useHead({
  script: [
    {
      children: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3852225,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
    },
    {
      children: `window._mfq = window._mfq || [];
        (function() {
          var mf = document.createElement("script");
          mf.type = "text/javascript"; mf.defer = true;
          mf.src = "//cdn.mouseflow.com/projects/7d391ec4-5e29-4558-90e2-a987891e7c8c.js";
          document.getElementsByTagName("head")[0].appendChild(mf);
        })()`,
    },
  ],
});
</script>
