module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      margin: {
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "6rem",
      },
      backgroundImage: {
        earth: "url('./imgs/earth.png')",
        map: "url('./imgs/map.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
