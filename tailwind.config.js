/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg_light: '#f6f8ff',
        bg_container_light: '#fefefe',
        bg_card_light: '#697c9a',
        text_primary_light: '#4b6a9b',

        bg_dark: '#141d2f',
        bg_container_dark: '#1e2a47',
        bg_card_dark: '#697c9a',
        text_primary_dark: '#fff',

        submit: '#0079ff',
      },
    },
  },
  plugins: [],
};
