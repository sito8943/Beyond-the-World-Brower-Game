import * as ReactDOMClient from "react-dom/client";

// font
import "@fontsource/josefin-sans";
import "@fontsource/lexend-deca";

// context
import { UserProvider } from "./context/UserProvider";
import { ModeProvider } from "./context/ModeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import { NotificationProvider } from "./context/NotificationProvider";

// own components
import Notification from "./components/Notification/Notification";

// app
import App from "./App";

// styles
import "./index.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <UserProvider>
    <LanguageProvider>
      <ModeProvider>
        <NotificationProvider>
          <Notification />
          <App />
        </NotificationProvider>
      </ModeProvider>
    </LanguageProvider>
  </UserProvider>
);
