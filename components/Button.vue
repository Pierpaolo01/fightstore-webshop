<template>
  <button :class="buttonClasses">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (value) => ["outlined", "solid"].includes(value),
    },
    color: {
      type: String,
      default: "white",
      validator: (value) => ["white", "black", "green-500"].includes(value),
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].includes(value),
    },
    label: {
      type: String,
    },
  },
  computed: {
    buttonClasses() {
      return [
        // Base classes
        "border",
        "font-bold",
        "rounded",

        // Size classes
        this.size === "sm"
          ? "text-sm px-3 py-1"
          : this.size === "lg"
          ? "text-lg px-5 py-3"
          : "text-md px-4 py-2", // Default

        // Variant and color classes
        this.variant === "outlined"
          ? `border-${this.color} text-${this.color} hover:bg-${this.color} hover:bg-opacity-30`
          : `border-none bg-${this.color} text-${
              this.color === "white" ? "black" : "white"
            } hover:bg-opacity-70`,
      ];
    },
  },
};
</script>
