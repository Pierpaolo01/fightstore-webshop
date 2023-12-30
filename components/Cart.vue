<template>
  <div class="rounded-lg bg-green-300 p-2 cursor-pointer relative">
    <IconCart />
    <div
      class="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-sm w-5 h-5 flex justify-center items-center font-roboto font-semibold"
      v-if="cart"
    >
      {{ cart.totalQuantity }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { GetCartQuery } from "~/graphql/queries";
import { useCartStore } from "~/store/useCartStore";

const store = useCartStore();

const { triggerRefetch } = storeToRefs(store);

const variables = reactive({
  id: "",
  fetchPolicy: "no-cache",
});

const { load, refetch, result } = useLazyQuery(GetCartQuery, variables);

onMounted(() => {
  const storedCartId = localStorage.getItem("fight-store-cart-id");
  if (storedCartId) {
    variables.id = storedCartId;
    load();
  }
});

const cart = computed(() => result.value?.cart);
watch(triggerRefetch, () => {
  refetch();
});
</script>
