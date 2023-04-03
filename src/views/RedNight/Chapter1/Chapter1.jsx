// Chapter 1 - The Beginning of a Nightmare

import React from "react";

// cinematic
import Intro from "../Cinematics/Intro";

// quests
import Quest1 from "./Quests/Quest1";

function Chapter1() {
  return (
    <div>
      <Quest1 />
      <Intro />
    </div>
  );
}

export default Chapter1;
