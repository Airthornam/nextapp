module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: "transparent",
      herobg: "#2124B1",
      white: "#ffffff",
      secondary: '#4777F5',
      maincolors: '#2183DA',
      dark: '#1D1D27',
      gray: '#A99A8B',
      red: '#FEA4C3',
      orange: '#EDA02C',
      lightblue: '#3FCDC7',
      green: '#7DDF6F',
      blue: '#2282FF',
      yellow: '#FFD04D',
    },
    extend: {
      scale: {
        '175': '1.1',
      }
    },
  },
  plugins: [],
};
