import React from "react";

export default function Row({ children }) {
  return (
    <div className="flex items-start justify-start w-full flex-wrap">
      {children}
    </div>
  );
}
