export const useCartTriggerStore = defineStore("cartTrigger", () => {
  const triggerRefetch = ref(0);

  function triggerCartRefetch() {
    triggerRefetch.value++;
  }

  return { triggerRefetch, triggerCartRefetch };
});
