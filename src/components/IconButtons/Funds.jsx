import React, { useMemo } from "react";
import Tippy from "@tippyjs/react";

// icons
import { GiMoneyStack } from "react-icons/gi";

// contexts
import { useUser } from "../../contexts/PlayerProvider";
import { useLanguage } from "../../contexts/LanguageProvider";

// enum
import Resources from "../../enum/Resources";

// styles
import "./styles.css";

export default function Funds({ className, numberClassName }) {
  const { userState } = useUser();
  const { languageState } = useLanguage();

  const tooltips = useMemo(() => {
    return languageState.texts.tooltips;
  }, [languageState]);

  return (
    <div className="flex gap-1 items-center">
      <Tippy content={tooltips.funds}>
        <button
          className={`icon flex gap-1 items-center justify-center ${className}`}
        >
          <GiMoneyStack />
        </button>
      </Tippy>
      <span className={numberClassName}>
        {userState.user?.resources[Resources.Funds] || 0}
      </span>
    </div>
  );
}
