import React from "react";

export default function Route({ startX, endX, startY, endY, color }) {
  return (
    <div className="absolute pointer-events-none">
      <svg
        width={startX + 36 + endX}
        height={startY + endY + 36}
        strokeDasharray="4"
      >
        <line
          x1={startX + 20}
          y1={startY + 20}
          x2={endX + 18}
          y2={endY + 20}
          stroke={color}
        />
      </svg>
    </div>
  );
}
