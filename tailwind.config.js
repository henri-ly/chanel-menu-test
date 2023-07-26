/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'demo-menu-bg': "#F7F5F7",
        'demo-menu-hover': "#CCE9FA"
      }
    },
  },
  plugins: [],
}