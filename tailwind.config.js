/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      primary: colors.cyan,
      secondary: colors.darkblue,
      neutral: colors.gray,
      cyan: {
        100: '#C3FBFF',
        300: '#37F2FF',
        500: '#3EDDE8',
        600: '#2ACAD6',
      },
      darkblue: '#070738',
      blue: '#1313ee',
      sand: '#e8e2d0',
      pink: '#ff22f5',
      orange: '#ff8500',
      yellow: '#f7ba23',
      red: '#ff1f5a',
      purple: '#9d2cff',
      white: '#ffffff',
      gray: '#e0e0e0',
    },
    fontSize: {
      // font-size, line-height
      // xs: ['14px', '20px'],
      sm: ['14px', '20px'],
      base: ['16px', '28px'],
      lg: ['40px', '64px'],
      xl: ['52px', '68px'],
      // 2xl: ['52px', '68px'],
      // 3xl: ['72px', '68px'],
    },
    fontFamily: {
      pattaya: ['Pattaya', 'serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
