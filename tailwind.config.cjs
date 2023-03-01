/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#222333",
      secondary: "#00C6C2",
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
    },
  },
  plugins: [],
};
