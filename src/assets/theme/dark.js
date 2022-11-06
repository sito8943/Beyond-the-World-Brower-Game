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
    h1: { color: "#fff", fontFamily: "Josefin Sans, sans-serif" },
    h2: { color: "#fff", fontFamily: "Josefin Sans, sans-serif" },
    h3: { color: "#eee", fontFamily: "Josefin Sans, sans-serif" },
    h4: { color: "#eee", fontFamily: "Josefin Sans, sans-serif" },
    h5: { color: "#eee", fontFamily: "Lexend Deca, sans-serif" },
    p: { color: "#eee", fontFamily: "Lexend Deca, sans-serif" },
    span: { color: "#eee", fontFamily: "Lexend Deca, sans-serif" },
    label: { color: "#eee", fontFamily: "Lexend Deca, sans-serif" },
  },
  a: {
    fontSize: "12px",
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
  "& .button": {
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

const dark = {
  palette,
};

export default dark;
