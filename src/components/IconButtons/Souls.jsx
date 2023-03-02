import React, { useMemo } from "react";
import Tippy from "@tippyjs/react";

// icons
import { GiTombstone } from "react-icons/gi";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

export default function DeadCounter({ className }) {
  const { languageState } = useLanguage();

  const tooltips = useMemo(() => {
    return languageState.texts.tooltips;
  }, [languageState]);

  return (
    <Tippy content={tooltips.souls}>
      <button className={`icon flex items-center justify-center ${className}`}>
        <GiTombstone />
      </button>
    </Tippy>
  );
}
