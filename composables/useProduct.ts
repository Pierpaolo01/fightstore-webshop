import { GetProductQuery, type Product } from "~/graphql/queries";

export const useProduct = (handle) => {
  const { result, refetch, onResult } = useQuery(GetProductQuery, { handle });

  const product = computed<Product>(() => {
    if (!result.value) {
      return null;
    }

    return {
      ...result.value.product,
      images:
        result.value.product.images?.edges?.map((edge) => edge.node) ?? [],
      variants:
        result.value.product.variants?.edges?.map((edge) => edge.node) ?? [],
    };
  });

  return { product, refetch, onResult };
};
