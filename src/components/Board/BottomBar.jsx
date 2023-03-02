import React from "react";

// styles
import "./styles.css";

export default function BottomBar() {
  return (
    <div className="w-full flex bottom-bar items-center justify-between bg-dark-primary">
      <div className="menu flex items-center justify-start"></div>
      <div className="resources flex items-center justify-end"></div>
    </div>
  );
}
