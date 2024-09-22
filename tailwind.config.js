/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'Roboto', 'sans-serif'], // Set Poppins as the default sans-serif font
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '100%', 
          md: '100%', 
          lg: '100%', 
          xl: '1140px', 
          '2xl': '1140px', 
        },
      },
      boxShadow: {
        'statBox': '0px 8px 24px rgba(149, 157, 165, 0.2)', 
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
