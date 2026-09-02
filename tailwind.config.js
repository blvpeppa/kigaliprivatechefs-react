/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        saffron: 'hsl(45 91% 58%)',
        cadet: 'hsl(249 37% 19%)',
        pistachio: 'hsl(88 50% 60%)',
        cultured: 'hsl(220 13% 95%)',
        rhythm: 'hsl(240 9% 51%)',
        crayola: 'hsl(0 100% 66%)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        monoton: ['Monoton', 'cursive'],
      },
      boxShadow: {
        soft: '0 0 10px hsla(0,0%,0%,0.05)',
        card: '2px 2px 10px hsla(0,0%,0%,0.1)',
      },
      keyframes: {
        scaleUp: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-5px) scale(1.05)' },
        },
        moveUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-3px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        lazyScaleUp: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        scaleUp2: 'scaleUp 3s ease-in-out infinite',
        scaleUp3: 'scaleUp 2s ease-in-out infinite',
        scaleUp4: 'scaleUp 4s ease-in-out infinite',
        moveUp2: 'moveUp 3s ease-in-out infinite',
        lazyScaleUp: 'lazyScaleUp 30s linear infinite',
      },
    },
  },
  plugins: [],
}
