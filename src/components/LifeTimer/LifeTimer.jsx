import React from "react";

// @emotion
import { css } from "@emotion/css";

// styles
import "./styles.css";

export default function LifeTimer() {
  const timeUnit = "1s";
  const timeLength = "15s";
  const timerDelay = "1s";

  const startingHue = 160;
  const hueIncrement = 360 / timeLength;

  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        color: "white",
        borderRadius: "50%",
        "&:before": {
          content: "15",
          "-webkit-animation":
            "15s 1s forwards timer_countdown, 1s 0.875s 15 timer_beat",
          animation: "15s 1s forwards timer_countdown, 1s 0.875s 15 timer_beat",
        },
        "&:after": {
          content: "",
          position: absolute,
          top: 0,
          left: 0,
          zIndex: -100,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.125)",
          "-webkit-animation": "15s 1s linear forwards timer_indicator",
          animation: "15s 1s linear forwards timer_indicator",
        },
      })}
    ></div>
  );
}
