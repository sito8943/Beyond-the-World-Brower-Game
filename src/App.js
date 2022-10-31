import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// sito components
import SitoContainer from "sito-container";

// layouts
import Main from "./layouts/Main";

// views
import Home from "./views/Home/Home";
import SignUp from "./views/Auth/SignUp";
import SignIn from "./views/Auth/SignIn";
import SignOut from "./views/Auth/SignOut";
import NotFound from "./views/NotFound/NotFound";

// context
import { useMode } from "./context/ModeProvider";

// theme
import light from "./assets/theme/light";
import dark from "./assets/theme/dark";

const App = () => {
  const { modeState } = useMode();

  useEffect(() => {
    document.body.style.background =
      modeState.mode !== "light"
        ? dark.palette.background.screen
        : light.palette.background.screen;
  }, [modeState]);

  return (
    <SitoContainer
      sx={{
        minWidth: "100%",
        minHeight: "100vh",
        ...modeState.palette.font,
        hr: modeState.palette.hr,
        a: modeState.palette.a,
        "& .sidebar": {
          background: modeState.palette.background.sidebar,
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/auth" element={<></>}>
            <Route index="index" element={<SignIn />} />
            <Route exact path="/auth/sign-up" element={<SignUp />} />
            <Route exact path="/auth/sign-out" element={<SignOut />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SitoContainer>
  );
};

export default App;
