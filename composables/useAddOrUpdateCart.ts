import { CreateCartMutation } from "~/graphql/queries";

export const useAddOrUpdateCart = async (
  productId: string,
  quantity: number
) => {
  const storedCart = localStorage.getItem("fight-store-cart-id");

  if (!storedCart) {
    const { mutate, onDone } = useMutation(CreateCartMutation);

    await mutate({
      input: {
        lines: [
          {
            quantity,
            merchandiseId: productId,
          },
        ],
      },
    });

    onDone((data) => {
      console.log(data);
    });
  }
};
