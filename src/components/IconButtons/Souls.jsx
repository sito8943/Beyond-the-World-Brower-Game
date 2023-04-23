import React, { useMemo } from "react";
import Tippy from "@tippyjs/react";

// icons
import { GiDeathSkull } from "react-icons/gi";

// contexts
import { usePlayer } from "../../contexts/PlayerProvider";
import { useLanguage } from "../../contexts/LanguageProvider";

// enum
import Resources from "../../enum/Resources";

// styles
import "./styles.css";

export default function DeadCounter({ className, numberClassName }) {
  const { playerState } = usePlayer();
  const { languageState } = useLanguage();

  const tooltips = useMemo(() => {
    return languageState.texts.tooltips;
  }, [languageState]);

  return (
    <div className="flex gap-1 items-center">
      <Tippy content={tooltips.souls}>
        <button
          className={`icon flex gap-1 items-center justify-center ${className}`}
        >
          <GiDeathSkull />
        </button>
      </Tippy>
      <span className={numberClassName}>
        {playerState.user?.resources[Resources.Souls] || 0}
      </span>
    </div>
  );
}
