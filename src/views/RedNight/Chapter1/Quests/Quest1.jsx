// Chapter 1 - The Beginning of a Nightmare
// Quest 1 - Routine Mission

import React, { useEffect, useMemo } from "react";

// dialogs
import Quests from "../../../../components/Dialog/Quests";

// contexts
import { useQuests } from "../../../../contexts/QuestsProvider";
import { useLanguage } from "../../../../contexts/LanguageProvider";

function Quest1() {
  const { languageState } = useLanguage();
  const { questsState, setQuestsState } = useQuests();

  const quests = useMemo(
    () => languageState.texts.chapters[0].quests[0],
    [languageState]
  );

  useEffect(() => {
    setQuestsState({
      type: "init",
      value: quests,
    });
  }, []);

  return (
    <div>
      <Quests quests={questsState.quests} />
    </div>
  );
}

export default Quest1;
