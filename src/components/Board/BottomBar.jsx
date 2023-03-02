import React from "react";
import TurnButton from "../IconButtons/TurnButton";

// styles
import "./styles.css";

export default function BottomBar() {
  return (
    <div className="w-full relative flex items-center justify-between">
      <div className="absolute bottom-bar w-full bg-dark-primary"></div>
      <div className="absolute w-full">
        <div className="menu flex items-center justify-start"></div>
        <div className="resources flex items-center justify-end px-3">
          <TurnButton className="end-turn text-white rounded-circle bg-light-primary" />
        </div>
      </div>
    </div>
  );
}
