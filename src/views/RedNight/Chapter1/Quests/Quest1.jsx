// Chapter 1 - The Beginning of a Nightmare
// Quest 1 - Routine Mission

import React from "react";

// dialogs
import Quests from "../../../../components/Dialog/Quests";

// contexts
import { useQuests } from "../../../../contexts/QuestsComponens";

function Quest1() {
  const { questsState } = useQuests();

  return (
    <div>
      <Quests quests={questsState.quests} />
    </div>
  );
}

export default Quest1;
