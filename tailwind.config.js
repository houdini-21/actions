/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#57DE8F",
        dark: "#1F2A37",
      },
    },
  },
  plugins: [],
};
