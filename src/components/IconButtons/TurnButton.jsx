import React, { useMemo, useState, useEffect } from "react";
import Tippy from "@tippyjs/react";

// icons
import { VscCompassActive, VscCompass, VscLock } from "react-icons/vsc";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

export default function TurnButton({ className, numberClassName }) {
  const { languageState } = useLanguage();

  const [rotating, setRotating] = useState(false);

  const tooltips = useMemo(() => {
    return languageState.texts.tooltips;
  }, [languageState]);

  useEffect(() => {
    if (rotating)
      setTimeout(function () {
        setRotating(false);
        clearTimeout(this);
      }, 2000);
  }, [rotating]);

  return (
    <div className="flex gap-1 items-center">
      <Tippy content={tooltips.endTurn}>
        <button
          onClick={() => setRotating(true)}
          className={`icon flex gap-1 items-center justify-center ${className}`}
        >
          {rotating ? <VscCompass className="rotate" /> : <VscCompassActive />}
        </button>
      </Tippy>
    </div>
  );
}
