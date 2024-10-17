// tailwind.config.cjs
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte}",
    "./src/routes/**/*.{html,js,svelte}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleAndMove: {
          '0%, 100%': { transform: 'scale(0.75) translateX(0)' },
          '80%': { transform: 'scale(1) translateX(1rem)' },
        },
      },
      animation: {
        'scale-move': 'scaleAndMove 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
