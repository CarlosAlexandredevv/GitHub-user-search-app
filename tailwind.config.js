/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg_light: '#f6f8ff',
        bg_container_light: '#fefefe',
        text_primary_light: '#4b6a9b',

        bg_dark: '#141d2f',
        bg_container_dark: '#1E2A47',
        text_primary_dark: '#fff',

        submit: '#0079ff',
        username: '#0B79FF',
        icon: '#697C9A',
      },
    },
  },
  plugins: [],
};
