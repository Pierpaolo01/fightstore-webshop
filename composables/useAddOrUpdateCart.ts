import { CreateCartMutation, AddToCartMutation } from "~/graphql/queries";
import { useCartStore } from "~/store/useCartStore";
import { is10DaysOrMoreAgo } from "~/utils/utils";

export const useAddOrUpdateCart = () => {
  const storedCartId = ref<string>();
  const isClient = process.client;

  const { triggerCartRefetch } = useCartStore();

  onMounted(() => {
    if (isClient) {
      let storedCart = JSON.parse(
        localStorage.getItem("fight-store-cart-id") ?? "{}"
      );

      if (is10DaysOrMoreAgo(storedCart?.createdAt)) {
        localStorage.removeItem("fight-store-cart-id");
        storedCart = undefined;
      }
      storedCartId.value = storedCart?.id;
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

  const addToCart = async (productId: string, quantity = 1) => {
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
          storedCartId.value = cartId;
          localStorage.setItem(
            "fight-store-cart-id",
            JSON.stringify({
              id: cartId,
              createdAt: new Date().toISOString(),
            })
          );
        }

        triggerCartRefetch();
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
        triggerCartRefetch();
      });
    }
  };

  return { addToCart, isAddingToCart };
};
