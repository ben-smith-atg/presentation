/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cursor: {
          bg: "#1E1E1E", // Dark background
          text: "#D4D4D4", // Light text
          prompt: "#2D2D2D", // Slightly lighter than bg for contrast
        },
      },
    },
  },
  plugins: [],
};
