<template>
  <div
    class="rounded-lg bg-green-300 p-2 cursor-pointer relative"
    @click="
      cart && cart.totalQuantity ? (slideoverIsOpen = !slideoverIsOpen) : null
    "
  >
    <IconCart />
    <div
      class="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-sm w-5 h-5 flex justify-center items-center font-roboto font-semibold"
      v-if="cart && cart.totalQuantity"
    >
      {{ cart.totalQuantity }}
    </div>
  </div>
  <Teleport to="body">
    <USlideover v-model="slideoverIsOpen">
      <div class="h-full w-full flex items-center justify-center p-4 relative">
        <IconClose
          class="absolute top-6 right-4 cursor-pointer z-50"
          @click="slideoverIsOpen = false"
        />
        <IconLoading class="animate-spin" v-if="!cartDetail" />
        <div v-if="cartDetail" class="h-full w-full space-y-12 relative">
          <h2>Jouw winkelwagen</h2>
          <div class="space-y-6 relative">
            <div v-for="line in cartDetail.lines" :key="line.id">
              <div class="flex justify-between">
                <div class="flex space-x-2" :disabled="true">
                  <img
                    :src="line.merchandise.image?.url"
                    alt="line"
                    class="h-16 w-16 object-contain"
                  />
                  <div>
                    <p class="font-bold">
                      {{ line.merchandise.product.title }}
                    </p>
                    <p class="text-sm font-semibold text-black/70">
                      <span class="font-bold text-black">Variant: </span>
                      {{ line.merchandise.title }}
                    </p>
                    <p
                      class="text-sm font-semibold text-black/70 font-currency"
                    >
                      <span class="font-bold text-black"> prijs: </span>
                      {{ line.merchandise.price.amount }}
                      {{ line.merchandise.price.currencyCode }}
                    </p>
                  </div>
                </div>
                <div class="text-right space-y-2 flex items-end space-x-2">
                  <div
                    class="h-full flex flex-col justify-between font-currency"
                  >
                    <p>
                      {{ line.cost.subtotalAmount.amount }}
                      {{ line.cost.subtotalAmount.currencyCode }}
                    </p>
                    <QuantitySelector
                      v-model="line.quantity"
                      :disabled="!line.merchandise.availableForSale"
                      @update:model-value="
                        updateCartLineQuantity(
                          line.id,
                          line.merchandise.id,
                          $event
                        )
                      "
                    />
                  </div>
                  <button
                    class="p-2 rounded-md hover:bg-red-500 hover:text-white transition-all duration-200"
                    @click="removeCartLineItem(line.id)"
                  >
                    <IconTrash class="h-4 w-4" />
                  </button>
                </div>
              </div>
              <UAlert
                v-if="!line.merchandise.availableForSale"
                class="mt-2"
                icon="i-heroicons-exclamation-circle"
                color="red"
                variant="soft"
                title="Dit product is niet meer op voorraad"
              />
            </div>
            <UAlert
              v-if="showWarning"
              icon="i-heroicons-exclamation-circle"
              color="red"
              variant="soft"
              :title="warningTitle"
              :description="warningDescription"
            />
            <!-- Empty state / Loading -->
            <div v-if="!cartDetail.lines.length">
              <p>Je hebt nog geen producten in je winkelwagen</p>
            </div>
            <div
              v-if="cartUpdating || cartRemoving || cartLoading"
              class="absolute -top-6 h-full w-full flex justify-center items-center bg-black/10"
            >
              <IconLoading class="animate-spin" />
            </div>
            <!-- Checkout  -->
            <div v-if="cartDetail" class="border-t w-full p-4 space-y-4">
              <div class="flex justify-between font-currency">
                <span> Winkelwagen subtotaal </span>
                <span>
                  {{ cartDetail.cost.subtotalAmount.amount }}
                  {{ cartDetail.cost.subtotalAmount.currencyCode }}
                </span>
              </div>
              <NuxtLink
                :to="cartDetail.checkoutUrl"
                target="_blank"
                class="block"
              >
                <button
                  class="w-full flex justify-center space-x-4 items-center px-2 py-3 border font-roboto font-medium text-lg text-black border-green-500 bg-green-500 rounded hover:bg-green-600"
                >
                  Naar checkout
                </button>
              </NuxtLink>
              <p class="text-slate-500 font-roboto -">
                Geschakte lever tijden 2-3 werkdagen
              </p>
            </div>
          </div>
          <div v-if="complimentaryProducts.length">
            <h3 class="mb-4">Aanraders</h3>
            <div class="space-y-6 tablet:space-y-0">
              <div
                v-for="recommendation in complimentaryProducts"
                :key="recommendation.id"
              >
                <div
                  class="flex flex-col tablet:flex-row justify-between space-y-4 tablet:space-y-0"
                >
                  <div class="flex space-x-2" :disabled="true">
                    <img
                      :src="recommendation.featuredImage?.url"
                      alt="line"
                      class="h-16 w-16 object-contain"
                    />
                    <div>
                      <p class="font-bold">
                        {{ recommendation.title }}
                      </p>
                      <p
                        class="text-sm font-semibold text-black/70 font-currency"
                      >
                        <span class="font-bold text-black"> prijs: </span>
                        {{ recommendation.priceRange.minVariantPrice.amount }}
                        {{
                          recommendation.priceRange.minVariantPrice.currencyCode
                        }}
                      </p>
                    </div>
                  </div>
                  <div :class="isAddingToCart ? 'opacity-50 cursor-wait' : ''">
                    <Button
                      v-if="recommendation.variants.length === 1"
                      variant="solid"
                      color="green-500"
                      size="sm"
                      @click="addToCart(recommendation.variants[0])"
                    >
                      <div class="flex justify-between items-center gap-2">
                        <span>Voeg toe</span>
                        <IconPlus class="h-4 w-4 inline-block" />
                      </div>
                    </Button>
                    <NuxtLink
                      @click="slideoverIsOpen = false"
                      :to="'/products/' + recommendation.handle"
                      v-if="recommendation.variants.length > 1"
                    >
                      <Button variant="solid" color="green-500" size="sm">
                        <div class="flex justify-between items-center gap-2">
                          <span>Kies variant</span>
                          <IconArrowRight class="h-4 w-4 inline-block" />
                        </div>
                      </Button>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </USlideover>
  </Teleport>
</template>

<script setup lang="ts">
import {
  GetCartTotalQuery,
  GetCartDetailQuery,
  UpdateCartLineMutation,
  RemoveCartLineMutation,
  type CartDetail,
} from "~/graphql/queries";
import { useCartStore } from "~/store/useCartStore";
import { is10DaysOrMoreAgo } from "~/utils/utils";

const slideoverIsOpen = ref(false);
const store = useCartStore();
const { triggerRefetch } = storeToRefs(store);
const { getComplimentaryProducts, complimentaryProducts } =
  useComplimentaryProducts();

const { addToCart, isAddingToCart } = useAddOrUpdateCart();

const { showWarning, setWarning, warningDescription, warningTitle } =
  useWarning();

const variables = reactive({
  id: "",
  fetchPolicy: "no-cache",
});

const {
  load: loadCartTotal,
  refetch: refetchCartTotal,
  result: cartTotalResult,
} = useLazyQuery(GetCartTotalQuery, variables);

const {
  load: loadCartDetail,
  refetch: refetchCartDetail,
  result: detailCartResult,
  loading: cartLoading,
} = useLazyQuery(GetCartDetailQuery, variables);

const cartLineUpdate = reactive({
  cartId: "",
  lines: [
    {
      id: "",
      merchandiseId: "",
      quantity: 1,
    },
  ],
});

const cartLineRemove = reactive({
  cartId: "",
  lineIds: [""],
});

const { mutate: updateCartLine, loading: cartUpdating } = useMutation(
  UpdateCartLineMutation
);

const { mutate: removeCartLine, loading: cartRemoving } = useMutation(
  RemoveCartLineMutation
);

onMounted(() => {
  const storedCart = JSON.parse(
    localStorage.getItem("fight-store-cart-id") ?? "{}"
  );

  if (storedCart && storedCart.id && !is10DaysOrMoreAgo(storedCart.createdAt)) {
    variables.id = storedCart.id;
    cartLineUpdate.cartId = storedCart.id;
    cartLineRemove.cartId = storedCart.id;

    loadCartTotal();
  }
});

const updateCartLineQuantity = useDebounce(
  async (lineId: string, merchandiseId: string, newQuantity: string) => {
    const line = cartDetail.value?.lines.find((line) => line.id === lineId);

    if (Number(newQuantity) > (line?.merchandise.quantityAvailable ?? 0)) {
      setWarning(
        "Niet genoeg voorraad",
        "Er is niet genoeg voorraad van dit product"
      );
    }

    cartLineUpdate.lines[0] = {
      id: lineId,
      merchandiseId,
      quantity: parseInt(newQuantity),
    };

    await updateCartLine(cartLineUpdate);
    await refetchCartTotal();
    await refetchCartDetail();
  },
  200
);

const removeCartLineItem = async (lineId: string) => {
  cartLineRemove.lineIds[0] = lineId;

  await removeCartLine(cartLineRemove);

  await refetchCartTotal();
  await refetchCartDetail();
};

const cart = computed(() => cartTotalResult.value?.cart);

const cartDetail = ref<CartDetail>();

watch(detailCartResult, (result) => {
  if (result) {
    cartDetail.value = {
      ...result.cart,
      lines: result.cart.lines.edges.map((line) => {
        return {
          ...line.node,
          quantity: ref(line.node.quantity),
        };
      }),
    };

    const productIds = result.cart.lines.edges.map(
      (line) => line.node.merchandise.product.id
    );

    getComplimentaryProducts(productIds);
  }
});

watch(triggerRefetch, () => {
  const storedCart = JSON.parse(
    localStorage.getItem("fight-store-cart-id") ?? "{}"
  );

  if (storedCart && storedCart.id) {
    variables.id = storedCart.id;
    cartLineUpdate.cartId = storedCart.id;
    cartLineRemove.cartId = storedCart.id;

    if (!cartTotalResult.value) {
      loadCartTotal();
    } else {
      refetchCartTotal();
    }
  }

  refetchCartDetail();
});

watch(slideoverIsOpen, (newValue) => {
  if (newValue && !cartDetail.value) {
    loadCartDetail();
  } else if (newValue) {
    refetchCartDetail();
  }
});
</script>
