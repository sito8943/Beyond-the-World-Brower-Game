const palette = {
  font: {
    h1: { color: "#222333", fontFamily: "Josefin Sans, sans-serif" },
    h2: { color: "#222333", fontFamily: "Josefin Sans, sans-serif" },
    h3: { color: "#222333", fontFamily: "Josefin Sans, sans-serif" },
    h4: { color: "#222222", fontFamily: "Josefin Sans, sans-serif" },
    h5: { color: "#222222", fontFamily: "Lexend Deca, sans-serif" },
    p: { color: "#222222", fontFamily: "Lexend Deca, sans-serif" },
    span: { color: "#222222", fontFamily: "Lexend Deca, sans-serif" },
  },
  a: {
    color: "#222222",
    "&:hover": {
      color: "#222333",
    },
  },
  hr: {
    borderColor: "#22222233",
    borderRadius: "100%",
    width: "100%",
  },
  background: {
    screen: "#fff",
    sidebar: "#eee",
  },
};

const light = {
  palette,
};

export default light;
