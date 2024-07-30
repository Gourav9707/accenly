/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "24px",
      H1: [
        "4.5rem",
        { fontWeight: "700", letterSpacing: "-2px", lineHeight: "80px" },
      ],
      H2: [
        "3.5rem",
        { fontWeight: "500", letterSpacing: "-1px", lineHeight: "64px" },
      ],
      H3: [
        "2.5rem",
        { fontWeight: "500", letterSpacing: "0px", lineHeight: "48px" },
      ],
      H4: [
        "1.5rem",
        { fontWeight: "500", letterSpacing: "0px", lineHeight: "32px" },
      ],
      H5: [
        "1rem",
        { fontWeight: "400", letterSpacing: "1px", lineHeight: "32px" },
      ],
      Label: [
        "0.75rem",
        { fontWeight: "400", letterSpacing: "0px", lineHeight: "18px" },
      ],
      Label_Bold: [
        "0.75rem",
        { fontWeight: "700", letterSpacing: "0px", lineHeight: "18px" },
      ],
      Text_Big: [
        "1.25rem",
        { fontWeight: "400", letterSpacing: "0px", lineHeight: "32px" },
      ],
      Text_Small: [
        "0.875rem",
        { fontWeight: "400", letterSpacing: "0px", lineHeight: "24px" },
      ],
      Subtitle_Text: [
        "1rem",
        { fontWeight: "400", letterSpacing: "0px", lineHeight: "32px" },
      ],
      Subtitle_Text_Bold: [
        "1rem",
        { fontWeight: "700", letterSpacing: "0px", lineHeight: "32px" },
      ],
    },
    extend: {
      colors: {
        primaryDark: "#080808",
        brand: "#376EEF",
        grey_200: "#FFFFFFA3",
        blue_200: "#376EEF33",
        blue_text: "#5080F1",
        blue_light: "#D7E2FC",
        modal_border: "#C3D3FA",
        bg_grey: "#9B9B9B",
        buttonRed: "#FD4747",
        buttonGreen: "#38D82A",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            transform: "translate(0,-10px)",
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        }
      },
      animation: {
        "fade-in-out":
          "fade-in .5s ease-in forwards, fade-out .5s 2s ease-out forwards",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
