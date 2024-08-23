/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna untuk light mode
        lightBackground: '#F7FAFC',
        lightText: '#2D3748',
        lightModeButton: '#E2E8F0',
        lightModeButtonHover: '#CBD5E0',

        // Warna untuk dark mode
        darkBackground: '#1A202C',
        darkText: '#E2E8F0',
        darkModeButton: '#4A5568',
        darkModeButtonHover: '#2D3748',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Menggunakan class untuk mengaktifkan dark mode
};
