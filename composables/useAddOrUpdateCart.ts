import { CreateCartMutation, AddToCartMutation } from "~/graphql/queries";
import { useCartTriggerStore } from "~/store/cart";

export const useAddOrUpdateCart = () => {
  const storedCartId = ref<string | null>(null);
  const isClient = process.client;
  const { triggerCartRefetch } = useCartTriggerStore();
  onMounted(() => {
    if (isClient) {
      storedCartId.value = localStorage.getItem("fight-store-cart-id");
    }
  });

  const {
    mutate: createCart,
    onDone: onCartCreated,
    loading: loadingCreate,
  } = useMutation(CreateCartMutation);

  const {
    mutate: updateCart,
    onDone: onCartUpdated,
    loading: loadingAdd,
  } = useMutation(AddToCartMutation);

  const isAddingToCart = computed(
    () => loadingAdd.value || loadingCreate.value
  );

  const addToCart = async (productId: string, quantity: number) => {
    if (!isClient) return;

    if (!storedCartId.value) {
      createCart({
        input: {
          lines: [
            {
              quantity,
              merchandiseId: productId,
            },
          ],
        },
      });

      onCartCreated((data) => {
        const cartId = data.data?.cartCreate?.cart?.id;

        if (cartId) {
          localStorage.setItem("fight-store-cart-id", cartId);
        }
      });
    }

    if (storedCartId.value) {
      updateCart({
        cartId: storedCartId.value,
        lines: [
          {
            merchandiseId: productId,
            quantity,
          },
        ],
      });

      onCartUpdated(() => {
        // TODO trigger cart refetch
      });
    }

    triggerCartRefetch();
  };

  return { addToCart, isAddingToCart };
};
