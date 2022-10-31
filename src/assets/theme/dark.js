const palette = {
  font: {
    h1: { color: "#fff", fontFamily: "Josefin Sans, sans-serif" },
    h2: { color: "#fff", fontFamily: "Josefin Sans, sans-serif" },
    h3: { color: "#eee", fontFamily: "Josefin Sans, sans-serif" },
    h4: { color: "#eee", fontFamily: "Josefin Sans, sans-serif" },
    h5: { color: "#eee", fontFamily: "Lexend Deca, sans-serif" },
    p: { color: "#eee", fontFamily: "Lexend Deca, sans-serif" },
    span: { color: "#eee", fontFamily: "Lexend Deca, sans-serif" },
  },
  a: {
    color: "#fff",
    "&:hover": {
      color: "#ddd",
    },
  },
  hr: {
    borderColor: "#adadad33",
    borderRadius: "100%",
    width: "100%",
  },
  background: {
    screen: "#222333",
    sidebar: "#222222",
  },
};

const dark = {
  palette,
};

export default dark;
