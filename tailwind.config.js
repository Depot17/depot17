module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': {opacity:'0'},
          '50%': {opacity:'1'},
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
        screens: {
            '3xl':'1600px',
        },
    },
  },
  plugins: [],
}