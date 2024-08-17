export const checkBoxCustomTheme = {
  checkbox: {
    defaultProps: {
      label: "Remember Me",
      color: "orange",
    },
    styles: {
      base: {
        input: {
          width: "w-5",
          height: "h-5",
          borderRadius: "rounded-md",
          borderColor: "border-blue-gray-200",
        },
        label: {
          color: "text-gray-700",
        },
        icon: {
          color: "text-white",
        },
      },
      colors: {
        orange: {
          background: "checked:bg-[#fb8500]",
          border: "checked:border-[#fb8500]",
          before: "checked:before:bg-[#fb8500]",
        },
      },
    },
  },
};
