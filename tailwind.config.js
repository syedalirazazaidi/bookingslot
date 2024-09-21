/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '100%', // Full width on small screens
          md: '100%', // Full width on medium screens
          lg: '100%', // Full width on large screens
          xl: '1140px', // Set max width to 1140px for extra-large screens
          '2xl': '1140px', // Set max width to 1140px for 2xl screens
        },
      },
      boxShadow: {
        'statBox': '0px 8px 24px rgba(149, 157, 165, 0.2)', // Custom shadow
      },
      colors: {
        pink: 'rgb(255, 236, 250)',
        blue: 'rgb(233, 245, 255)',
        purple: 'rgb(228, 222, 255)',
        orange: 'rgb(255, 236, 222)',
      },
    },
  },
  plugins: [],
};