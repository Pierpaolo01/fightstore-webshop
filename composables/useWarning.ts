export const useWarning = () => {
  const showWarning = ref(false);
  const warningTitle = ref("");
  const warningDescription = ref("");

  const setWarning = (title: string, description = "") => {
    showWarning.value = true;

    warningTitle.value = title;
    warningDescription.value = description;

    setTimeout(() => {
      showWarning.value = false;
      warningTitle.value = "";
      warningDescription.value = "";
    }, 3000);
  };

  return { showWarning, setWarning, warningTitle, warningDescription };
};
