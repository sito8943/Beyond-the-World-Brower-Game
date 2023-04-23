import React, { useCallback, useMemo, useState } from "react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

function Quests({ quests }) {
  const [visible, setVisible] = useState(true);

  const showOff = useCallback(() => {
    setVisible(!visible);
  }, [visible, setVisible]);

  const { languageState } = useLanguage();
  const { questDialog } = useMemo(
    () => ({ questDialog: languageState.texts.dialogs.quests }),
    [languageState]
  );

  function stateClassName(state) {
    switch (state) {
      case "undiscovered":
        return "quest-undiscovered";
      case "failed":
        return "quest-failed";
      case "completed":
        return "quest-completed";
      default: // discovered
        return "";
    }
  }

  return (
    <div className={`dialog quests ${visible ? "" : "show-off"}`}>
      <button
        onClick={showOff}
        className={`absolute right-2 top-1 ${
          visible ? "" : "text-white"
        } hover:text-white transition cursor-pointer pointer-events-auto z-10 text-xl`}
      >
        <FontAwesomeIcon
          icon={visible ? faArrowAltCircleLeft : faArrowAltCircleRight}
        />
      </button>
      <div className="diag-content">
        <h4 className="text-lg">{questDialog.title}</h4>
        {quests.map((item) => (
          <p key={item.id} className={stateClassName(item.state)}>
            {item.label[languageState.lang]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Quests;
