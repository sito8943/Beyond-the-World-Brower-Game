import React from "react";

// styles
import "./styles.css";

export default function Cell({ data, border }) {
  return (
    <div
      className={`flex items-center justify-center cell ${
        border ? "bordered" : ""
      }`}
    ></div>
  );
}
