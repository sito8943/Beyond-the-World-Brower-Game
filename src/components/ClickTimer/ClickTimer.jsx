import React from "react";

// styles
import "./styles.css";

export default function ClickTimer() {
  return (
    <div>
      <div className="timer" style="--duration: 3;--size: 30;">
        <div className="mask"></div>
      </div>

      <div className="timer" style="--duration: 10;--size: 100;">
        <div className="mask"></div>
      </div>
    </div>
  );
}
