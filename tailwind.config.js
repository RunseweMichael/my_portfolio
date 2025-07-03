export const content = ['./src/**/*.{html,js,jsx,ts,tsx}'];

export const theme = {
  screens: {
    sm: '350px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  extend: {
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      scroll: 'scroll 20s linear infinite',
    },
  },
};

export const plugins = [];
