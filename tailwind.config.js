/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#141414", // Netflix dark background
        secondary: "#181818", // Netflix card background
        light: {
          100: "#FFFFFF", // Pure white for primary text
          200: "#E5E5E5", // Light gray for secondary text
          300: "#B3B3B3", // Netflix muted text
        },
        dark: {
          100: "#232323", // Slightly lighter dark for cards
          200: "#191919", // Dark overlay
        },
        accent: "#E50914", // Netflix red
      },
    },
  },
  plugins: [],
};
