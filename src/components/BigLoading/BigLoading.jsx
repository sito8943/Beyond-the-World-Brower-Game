import React, { memo, useState, useEffect } from "react";

// icons
import { VscCompass } from "react-icons/vsc";

function BigLoading({ visible }) {
  return (
    <div
      className={`w-screen h-screen fixed z-90 bg-primary left-0 top-0 flex items-center justify-center transition ${
        visible ? "opacity-1" : "opacity-0 pointer-events-none"
      }`}
    >
      <VscCompass className="rotate text-white text-9xl" />
    </div>
  );
}

export default BigLoading;
