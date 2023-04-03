import React from "react";

// components
import Board from "./components/Board/Board";
import Chapter1 from "./views/RedNight/Chapter1/Chapter1";

// contexts
import { QuestsProvider } from "./contexts/QuestsComponens";

function App() {
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
