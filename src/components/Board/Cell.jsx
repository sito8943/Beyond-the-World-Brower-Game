import React, { useCallback } from "react";

// styles
import "./styles.css";

// textures
import grass from "../../assets/texture/grass.jpg";

export default function Cell({ data, border }) {
  const getTexture = useCallback(() => {
    const { type } = data;
    switch (type) {
      default:
        return grass;
    }
  }, [data]);

  return (
    <button
      className={`relative flex items-center justify-center cell transition ${
        border ? "bordered" : ""
      }`}
    >
      <img
        className="absolute w-full h-full"
        src={getTexture()}
        alt={`field-${data.type}`}
      />
      <div className="absolute w-full h-full transition hover:bg-light-primary-hover"></div>
    </button>
  );
}
