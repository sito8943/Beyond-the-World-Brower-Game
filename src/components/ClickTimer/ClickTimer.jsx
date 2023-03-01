import React, { useEffect } from "react";

// @emotion/css
import { css } from "@emotion/css";

// styles
import "./styles.css";

export default function ClickTimer({
  x,
  y,
  x2,
  y2,
  duration,
  turnOff,
  color,
  width,
}) {
  useEffect(() => {
    setTimeout(function () {
      turnOff();
      clearTimeout(this);
    }, duration * 990);
  }, []);

  return (
    <div
      className={`fixed ${css({
        top: y - 22,
        left: x - 2,
        transform: "rotateY(180deg)",
      })}`}
    >
      <div id="countdown">
        <div id="countdown-number"></div>
        <svg className="svg">
          <circle
            className={`circle ${css({
              width,
              stroke: color,
              animation: `countdown ${duration}s linear infinite forwards`,
            })}`}
            r="18"
            cx="20"
            cy="20"
          ></circle>
        </svg>
      </div>
    </div>
  );
}
