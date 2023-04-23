import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

// some-javascript-utils
import { getUserLanguage } from "some-javascript-utils/browser";

// contexts
import { useUser } from "./contexts/UserProvider";
import { useLanguage } from "./contexts/LanguageProvider";

// contexts
import { QuestsProvider } from "./contexts/QuestsProvider";
import { PlayerProvider } from "./contexts/PlayerProvider";

// components
const Board = loadable(() => import("./components/Board/Board"));
const Chapter1 = loadable(() => import("./views/RedNight/Chapter1/Chapter1"));

// views
const Home = loadable(() => import("./views/Home/Home"));
const Campaign = loadable(() => import("./views/Campaign/Campaign"));

// utils
import { getUser } from "./utils/local";

// config
import config from "./config";

function App() {
  const { setUserState } = useUser();
  const { setLanguageState } = useLanguage();

  useEffect(() => {
    try {
      setLanguageState({
        type: "set",
        lang: /* getUserLanguage(config.language) */ "es",
      });
      // just for test
      /* localStorage.setItem(
        config.localUser,
        JSON.stringify({
          id: "5047f5b4-750f-4aeb-80d8-4dabdd9cbfeb",
          user: "Sito",
        })
      ); */
      const localUser = getUser();
      console.log(localUser);
      if (localUser.id) setUserState({ type: "logged-in", user: localUser });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/campaign" element={<Campaign />}>
              <Route
                exact
                path="/campaign/chapter1"
                element={
                  <PlayerProvider>
                    <QuestsProvider>
                      <Board />
                      <Chapter1 />
                    </QuestsProvider>
                  </PlayerProvider>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
