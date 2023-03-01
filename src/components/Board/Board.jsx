import React from "react";
import Route from "../Route/Route";

// components
import RadialTimerButton from "../TimerButton/Prefab/RadialTimerButton";

export default function Board() {
  return (
    <div className="bg-primary relative w-full h-viewport overflow-auto">
      <RadialTimerButton
        position={{ x: 40, y: 60 }}
        action={() => {
          console.log("hola");
        }}
      >
        Casa
      </RadialTimerButton>
      <Route startX={40} startY={60} endX={550} endY={660} color="black" />
      <RadialTimerButton
        position={{ x: 550, y: 660 }}
        action={() => {
          console.log("hola");
        }}
      >
        Casa
      </RadialTimerButton>
    </div>
  );
}
