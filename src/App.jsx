import React, { useEffect } from "react";

// some-javascript-utils
import { getUserLanguage } from "some-javascript-utils/browser";

// contexts
import { useLanguage } from "./contexts/LanguageProvider";

// components
import Board from "./components/Board/Board";
import Chapter1 from "./views/RedNight/Chapter1/Chapter1";

// contexts
import { QuestsProvider } from "./contexts/QuestsProvider";

function App() {
  const { setLanguageState } = useLanguage();

  useEffect(() => {
    try {
      setLanguageState({
        type: "set",
        lang: /* getUserLanguage(config.language) */ "es",
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <QuestsProvider>
        <Board />
        <Chapter1 />
      </QuestsProvider>
    </div>
  );
}

export default App;
