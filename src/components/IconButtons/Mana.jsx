import React, { useMemo } from "react";
import Tippy from "@tippyjs/react";

// icons
import { GiSpellBook } from "react-icons/gi";

// contexts
import { usePlayer } from "../../contexts/PlayerProvider";
import { useLanguage } from "../../contexts/LanguageProvider";

// enum
import Resources from "../../enum/Resources";

// styles
import "./styles.css";

export default function ManaCounter({ className, numberClassName }) {
  const { playerState } = usePlayer();
  const { languageState } = useLanguage();

  const tooltips = useMemo(() => {
    return languageState.texts.tooltips;
  }, [languageState]);

  return (
    <div className="flex gap-1 items-center">
      <Tippy content={tooltips.mana}>
        <button
          className={`icon flex gap-1 items-center justify-center ${className}`}
        >
          <GiSpellBook />
        </button>
      </Tippy>
      <span className={numberClassName}>
        {playerState.user?.resources[Resources.Mana] || 0}
      </span>
    </div>
  );
}
