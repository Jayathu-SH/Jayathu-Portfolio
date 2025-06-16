/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary dark tones
        dark: {
          DEFAULT: '#0D1117', // Main background
          lighter: '#161B22', // Slightly lighter sections
          border: '#1F2933', // For borders or subtle dividers
        },
        // Accent colors (gradient purple and blue)
        accent: {
          purple: '#3a2a99', // Purple highlight
          blue: '#0e4a82',   // Blue highlight
        },
        // Text colors
        text: {
          primary: '#E6E6E6', // Main text
          secondary: '#8B949E', // Subtle secondary text
        },
      },
      backgroundImage: {
        // Gradients
        'gradient-accent': 'linear-gradient(to right, #7F5AF0, #2D8CFF)', // Purple-to-blue gradient
        'gradient-dark': 'linear-gradient(to bottom, #0D1117, #161B22)', // Subtle dark gradient
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Custom sans-serif font
        serif: ['Merriweather', 'serif'], // Custom serif font
        mono: ['Fira Code', 'monospace'], // Monospace font for coding
      },
    },
  },
  plugins: [],
};