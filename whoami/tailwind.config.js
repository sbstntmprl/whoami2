/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#E3DBBD',
        primary: '#335987',
        secondary: '#366E86',
        text: '#2B454D',
        active: '#C3C725',
        line: '#67A5B8'        
      },
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