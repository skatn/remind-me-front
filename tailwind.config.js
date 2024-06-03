/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      highlight: {
        1: '#006FFD',
        2: '#2897FF',
        3: '#6FBAFF',
        4: '#B4DBFF',
        5: '#EAF2FF',
      },
      neutral: {
        light: {
          1: '#C5C6CC',
          2: '#D4D6DD',
          3: '#E8E9F1',
          4: '#F8F9FE',
          5: '#FFFFFF',
        },
        dark: {
          1: '#1F2024',
          2: '#2F3036',
          3: '#494A50',
          4: '#71727A',
          5: '#8F9098',
        },
      },
      support: {
        success: {
          1: '#298267',
          2: '#3AC0A0',
          3: '#E7F4E8',
        },
        warning: {
          1: '#E86339',
          2: '#FFB37C',
          3: '#FFF4E4',
        },
        error: {
          1: '#ED3241',
          2: '#FF616D',
          3: '#FFE2E5',
        },
      },
      subject: {
        1: '#81D3EB',
        2: '#ABDEE6',
        3: '#CBAACB',
        4: '#BBB8DC',
        5: '#FF968A',
        6: '#FEE1E8',
        7: '#FFCCB6',
        8: '#FFCC4E',
        9: '#CCE2CB',
        10: '#D5E05B',
      },
    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto'],
      },
    },
  },
  plugins: [],
};
