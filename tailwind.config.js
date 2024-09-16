/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'custom-red': 'rgb(255, 0, 0)',        // Bright red
      'custom-orange': 'rgb(255, 165, 0)',   // Bright orange
      'custom-green': 'rgb(9, 232, 120)',      // Dark green
    }},
  },
  plugins: [],
}
