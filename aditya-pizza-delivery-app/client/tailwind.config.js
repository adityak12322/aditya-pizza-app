/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 🍕 Pizza Brand Colors
        pizza: {
          yellow: '#ffcc00',
          red: '#ec3335',
          green: '#49c649',
          brown: '#c57d56',
          black: '#222a36',
        },
        primary: '#ffcc00',     // Use for buttons, highlights
        accent: '#ec3335',      // Use for CTAs, pizza icons
        bg: '#fff6e0',          // Soft pizza background
        dark: '#292929',        // Overall dark UI base
      },
      fontFamily: {
        brand: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 4px 24px 0 rgba(233,55,30,.08)',
        pizza: '0 2px 12px 0 rgba(255,204,0,0.15)',
      },
      // Optionally: custom screens for responsive UI
      screens: {
        'xs': '400px',
        '3xl': '1800px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
