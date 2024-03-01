/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        background: '#E3DBBD',
        primary: '#335987',
        secondary: '#366E86',
        text: '#2B454D',
        active: '#C3C725',
        line: '#67A5B8'        
      }
    },
  },
  plugins: [],
}

// --color-text: #2B454D;
// --color-bg: #E3DBBD;
// --color-primary: #335987;
// --color-secondary: #366E86;

// --font-main: 'K2D', sans-serif;
// --font-primary: 'Amiko', sans-serif; 
// --font-secondary: 'Asap', sans-serif;