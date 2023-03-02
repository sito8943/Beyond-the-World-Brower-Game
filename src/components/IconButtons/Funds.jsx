import React, { useMemo } from "react";
import Tippy from "@tippyjs/react";

// icons
import { GiMoneyStack } from "react-icons/gi";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

export default function Funds({ className }) {
  const { languageState } = useLanguage();

  const tooltips = useMemo(() => {
    return languageState.texts.tooltips;
  }, [languageState]);

  return (
    <Tippy content={tooltips.funds}>
      <button className={`icon flex items-center justify-center ${className}`}>
        <GiMoneyStack />
      </button>
    </Tippy>
  );
}
