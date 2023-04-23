/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#222333",
      "light-primary": "#433E54",
      "dark-primary": "#361D1E",
      "light-primary-hover": "#433E5475",
      secondary: "#00AEBD",
      "light-secondary": "#00C6C2",
      "dark-secondary": "#004247",
      white: "#f0f0f0",
      "white-hover": "#c2c7cc",
      disabled: "#636362",
      black: "#1b1b1b",
      error: "#e72424",
      success: "#135e13",
    },
    extend: {
      width: {
        full: "100%",
        viewport: "100vw",
      },
      height: {
        full: "100%",
        viewport: "100vh",
      },
      borderRadius: {
        circle: "100%",
      },
      zIndex: {
        90: "90",
      },
    },
  },
  plugins: [],
};
