<template>
  <div
    class="rounded-lg bg-green-300 p-2 cursor-pointer relative"
    @click="slideoverIsOpen = !slideoverIsOpen"
  >
    <IconCart />
    <div
      class="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-sm w-5 h-5 flex justify-center items-center font-roboto font-semibold"
      v-if="cart"
    >
      {{ cart.totalQuantity }}
    </div>
  </div>
  <Teleport to="body">
    <USlideover
      v-model="slideoverIsOpen"
      :ui="{
        background: 'yellow',
        overlay: { background: 'bg-black' },
      }"
    >
      <div class="h-full w-full flex items-center justify-center p-4">
        <IconLoading class="animate-spin" v-if="!cartDetail" />
        <div v-else class="h-full w-full space-y-12">
          <h2>Jouw winkelwagen</h2>
          <div class="space-y-6">
            <div
              class="flex justify-between"
              v-for="product in cartDetail.lines"
              :key="product.id"
            >
              <div class="flex">
                <img
                  :src="product.merchandise.image?.url"
                  alt="product"
                  class="h-16 w-16 object-contain"
                />
                <div>
                  <p class="font-bold">
                    {{ product.merchandise.product.title }}
                  </p>
                  <p class="text-sm font-semibold text-black/70">
                    <span class="font-bold text-black">Variant: </span>
                    {{ product.merchandise.title }}
                  </p>
                  <p class="text-sm font-semibold text-black/70">
                    <span class="font-bold text-black">Aantal: </span>
                    {{ product.quantity }}
                  </p>
                </div>
              </div>
              <div class="text-right space-y-2">
                <p>
                  {{ product.merchandise.price.amount }}
                  {{ product.merchandise.price.currencyCode }}
                </p>
                <QuantitySelector />
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
  type CartDetail,
} from "~/graphql/queries";
import { useCartStore } from "~/store/useCartStore";

const slideoverIsOpen = ref(false);
const store = useCartStore();

const { triggerRefetch } = storeToRefs(store);

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
  loading: detailCartLoading,
} = useLazyQuery(GetCartDetailQuery, variables);

onMounted(() => {
  const storedCartId = localStorage.getItem("fight-store-cart-id");
  if (storedCartId) {
    variables.id = storedCartId;
    loadCartTotal();
  }
});

const cart = computed(() => cartTotalResult.value?.cart);

const cartDetail = computed<CartDetail>(() => {
  if (!detailCartResult.value) {
    return null;
  }
  console.log(detailCartResult.value?.cart);
  return {
    ...detailCartResult.value?.cart,
    lines: detailCartResult.value?.cart.lines.edges.map((line) => line.node),
  };
});

watch(triggerRefetch, () => {
  refetchCartTotal();
  refetchCartDetail();
});

watch(slideoverIsOpen, (newValue) => {
  if (newValue) {
    loadCartDetail();
  }
});
</script>
