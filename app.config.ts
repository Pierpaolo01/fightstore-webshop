export default defineAppConfig({
  ui: {
    primary: "stone",
    gray: "white",
    slideover: {
      overlay: {
        background: "bg-black/80 dark:bg-black/80",
      },
      background: "bg-black dark:bg-white",
      width: "w-screen max-w-2xl",
    },
    input: {
      base: "border-2 border-gray-300 dark:border-gray-700 font-roboto",
      color: {
        white: {
          outline:
            "shadow-sm bg-black dark:bg-gray-900 text-gray-900 dark:text-black ring-none",
        },
      },
    },
  },
});
