const plugin = require('tailwindcss/plugin');
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
        desktopL: '1440px',
        desktopXL: '1980px',
        '4k': '2560px',
      },
      zIndex: {
        scroller: '100',
        dropdown: '200',
        modal: '1000',
        popup: '1001',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('children', '& > *');
      addVariant('svg', '& > svg');
      addVariant('input', '& > input');
    }),
  ],
};
