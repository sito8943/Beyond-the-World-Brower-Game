import React, { useState } from "react";

// @emotion/css
import { css } from "@emotion/css";

// components
import ClickTimer from "../ClickTimer/ClickTimer";

export default function TimerButton({
  children,
  position,
  action,
  className,
  color,
}) {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [x2, setX2] = useState(null);
  const [y2, setY2] = useState(null);

  const showClock = (e) => {
    let { target } = e;
    while (target.nodeName.toLowerCase() !== "button")
      target = target.parentNode;
    setX(target.offsetLeft);
    setY(target.offsetTop);
    setX2(target.offsetWidth);
    setY2(target.offsetHeight);
    e.preventDefault();
    return false;
  };

  const hideClock = (e) => {
    setX(null);
    setY(null);
    setX2(null);
    setY2(null);
  };

  return (
    <div>
      {x !== null && y !== null ? (
        <ClickTimer
          x={x}
          y={y}
          x2={x2}
          y2={y2}
          duration={3}
          size={30}
          turnOff={() => {
            action();
            hideClock();
          }}
          color={color}
          width="4px"
        />
      ) : null}
      <button
        className={`absolute z-10 ${css({
          top: position.y,
          left: position.x,
        })} ${className}`}
        onContextMenu={(e) => {
          e.preventDefault();
          return false;
        }}
        onTouchStart={showClock}
        onTouchEnd={hideClock}
        onClick={(e) => action()}
        onMouseDown={showClock}
        onMouseUp={hideClock}
      >
        {children}
      </button>
    </div>
  );
}
