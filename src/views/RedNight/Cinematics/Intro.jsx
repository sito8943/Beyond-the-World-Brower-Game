import db from "../../../db/db.json";

import React, { useMemo, useState } from "react";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";

// components
import Dialog from "../../../components/Dialog/Dialog";

function Intro({ trail, remoteDialog }) {
  const { languageState } = useLanguage();
  const chapterCinematic = useMemo(() => db.chapters[0].cinematic, [db]);

  const [currentDialog, setCurrentDialog] = useState(remoteDialog);

  return (
    <div>
      {chapterCinematic.intro.messages[currentDialog] ? (
        <Dialog
          unit={chapterCinematic.intro.messages[currentDialog].unit}
          message={
            chapterCinematic.intro.messages[currentDialog].message[
              languageState.lang
            ]
          }
          action={{
            icon: "next",
            event: () => {
              trail({
                cinematic: chapterCinematic.intro.messages[currentDialog].next,
              });
              setCurrentDialog(
                chapterCinematic.intro.messages[currentDialog].next
              );
            },
          }}
        />
      ) : null}
    </div>
  );
}

export default Intro;
