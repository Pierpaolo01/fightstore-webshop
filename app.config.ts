export default defineAppConfig({
  ui: {
    primary: "stone",
    gray: "white",
    slideover: {
      overlay: {
        background: "opacity-50 dark:bg-black",
      },
      background: "bg-white dark:bg-white",
      width: "w-screen max-w-2xl",
    },
    input: {
      base: "border border-gray-700 bg-white dark:border-gray-700 font-roboto ring-gray-700 ",
      color: {
        white: {
          outline:
            "shadow-sm bg-black bg-gray-900 text-gray-900 dark:text-black ring-none",
        },
      },
    },
  },
});
