import React, { useMemo } from "react";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import "./styles.css";

function Quests({ quests }) {
  const { languageState } = useLanguage();
  const { questDialog } = useMemo(
    () => ({ questDialog: languageState.texts.dialogs.quests }),
    [languageState]
  );

  return (
    <div className="dialog quests">
      <div className="diag-content">
        <h4>{questDialog.title}</h4>
        {quests.map((item) => (
          <div key={item.id}>{item.label}</div>
        ))}
      </div>
    </div>
  );
}

export default Quests;
