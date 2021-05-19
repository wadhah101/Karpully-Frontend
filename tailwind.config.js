/* eslint-disable @typescript-eslint/no-var-requires */
const tcontainer = require('tailwindcss-fluid-container');
const lineClamp = require('@tailwindcss/line-clamp');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
    },
    fluidContainer: {
      default: {
        maxWidth: {
          default: '800px',
          '2xl': '1500px',
        },
        padding: {
          default: '1rem',
          lg: '2.5rem',
        },
      },
    },
    extend: {
      colors: {
        sblack: {
          111: '#111',
          191: '#191919',
          222: '#222',
          333: '#333',
          444: '#444',
          555: '#555',
        },
        kgreen: {
          100: '#d2f2dd',
          200: '#a6e5bb',
          300: '#79d999',
          400: '#4dcc77',
          500: '#20bf55',
          600: '#1a9944',
          700: '#137333',
          800: '#0d4c22',
          900: '#062611',
        },

        kpurple: {
          100: '#ddcfe2',
          200: '#bb9ec5',
          300: '#986ea8',
          400: '#763d8b',
          500: '#540d6e',
          600: '#430a58',
          700: '#320842',
          800: '#22052c',
          900: '#110316',
        },
        kpink: {
          100: '#fcd9e0',
          200: '#f8b3c2',
          300: '#f58ea3',
          400: '#f16885',
          500: '#ee4266',
          600: '#be3552',
          700: '#8f283d',
          800: '#5f1a29',
          900: '#300d14',
        },
        kyellow: {
          100: '#fff6d9',
          200: '#ffedb2',
          300: '#ffe48c',
          400: '#ffdb65',
          500: '#ffd23f',
          600: '#cca832',
          700: '#997e26',
          800: '#665419',
          900: '#332a0d',
        },
        kgray: {
          100: '#fff8f9',
          200: '#fff1f3',
          300: '#ffebee',
          400: '#ffe4e8',
          500: '#ffdde2',
          600: '#ccb1b5',
          700: '#998588',
          800: '#66585a',
          900: '#332c2d',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [lineClamp, tcontainer],
};
