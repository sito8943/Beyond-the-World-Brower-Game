// Chapter 1 - The Beginning of a Nightmare
// Quest 1 - Routine Mission
import db from "../../../../db/db.json";
import React, { useEffect, useMemo } from "react";

// dialogs
import Quests from "../../../../components/Quests/Quests";

// contexts
import { useQuests } from "../../../../contexts/QuestsProvider";

function Quest1() {
  const { questsState, setQuestsState } = useQuests();

  const { title, quests } = useMemo(() => {
    return { quests: db.chapters[0].quests[0], title: db.chapters[0].title };
  }, [db]);

  useEffect(() => {
    setQuestsState({
      type: "init",
      value: quests,
      title,
    });
  }, []);

  return (
    <div>
      <Quests quests={questsState.quests} />
    </div>
  );
}

export default Quest1;
