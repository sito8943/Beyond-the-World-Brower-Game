import React, { useMemo, useState } from "react";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";

// components
import Dialog from "../../../components/Dialog/Dialog";

function Intro() {
  const { languageState } = useLanguage();

  const chapterCinematic = useMemo(
    () => languageState.texts.chapters[0].cinematic
  );

  const [currentDialog, setCurrentDialog] = useState(0);

  return (
    <div>
      <Dialog
        unit={chapterCinematic.intro.messages[currentDialog].unit}
        message={chapterCinematic.intro.messages[currentDialog].message}
        action={{
          icon: "next",
          event: () =>
            setCurrentDialog(
              chapterCinematic.intro.messages[currentDialog].next
            ),
        }}
      />
    </div>
  );
}

export default Intro;
