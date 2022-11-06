const palette = {
  primary: {
    light: "#FFB563",
    main: "#DF7D6D",
    dark: "#A2586F",
  },
  secondary: {
    light: "#5CECC0",
    main: "#00B38A",
    dark: "#007D58",
  },
  font: {
    h1: { color: "#222333", fontFamily: "Josefin Sans, sans-serif" },
    h2: { color: "#222333", fontFamily: "Josefin Sans, sans-serif" },
    h3: { color: "#222333", fontFamily: "Josefin Sans, sans-serif" },
    h4: { color: "#222222", fontFamily: "Josefin Sans, sans-serif" },
    h5: { color: "#222222", fontFamily: "Lexend Deca, sans-serif" },
    p: { color: "#222222", fontFamily: "Lexend Deca, sans-serif" },
    span: { color: "#222222", fontFamily: "Lexend Deca, sans-serif" },
    label: { color: "#222222", fontFamily: "Lexend Deca, sans-serif" },
  },
  a: {
    fontSize: "12px",
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
  button: {
    cursor: "pointer",
    border: "none",
    padding: "7px 12px",
    fontWeight: "bold",
    color: "#222333",
    background: "#DF7D6D",
    "&: hover": {
      background: "#A2586F",
    },
  },
  "& .primary": {
    color: "#222333",
    background: "#DF7D6D",
    "&: hover": {
      background: "#A2586F",
    },
  },
  "& .secondary": {
    color: "#222333",
    background: "#00B38A",
    "&: hover": {
      background: "#007D58",
    },
  },
};

const light = {
  palette,
};

export default light;
