/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: [
          '12px',
          { fontWeight: 400, lineHeight: '16px', letterSpacing: '0.7' },
        ],
        md: [
          '16px',
          {
            fontWeight: 400,
            lineHeight: '16px',
            letterSpacing: '0.8',
          },
        ],
      },
      colors: {
        main: '#3B82F6',
        buttonInActive: '#EFF6FF',
      },
      fontFamily: {
        custom: ['base', 'yd330'],
      },
    },
  },
  plugins: [],
};
