import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// contexts
// contexts
import { LanguageProvider } from "./contexts/LanguageProvider";
import { UserProvider } from "./contexts/UserProvider";

// styles
import "./index.css";
import "tippy.js/dist/tippy.css"; // optional

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </LanguageProvider>
);
