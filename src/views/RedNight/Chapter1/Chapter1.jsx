// Chapter 1 - The Beginning of a Nightmare

import React, { useCallback, useEffect } from "react";

// cinematic
import Intro from "../Cinematics/Intro";

// contexts
import { useUser } from "../../../contexts/UserProvider";
import { usePlayer } from "../../../contexts/PlayerProvider";

// enum
import Nations from "../../../enum/Nations";

// quests
import Quest1 from "./Quests/Quest1";

// utils
import { updateUser } from "../../../utils/local";

function Chapter1() {
  const { userState } = useUser();
  const { setPlayerState } = usePlayer();

  const onAction = useCallback(
    (action) => {
      if (action.cinematic) {
        if (!userState.user.campaign.chapter1)
          userState.user.campaign.chapter1 = {
            id: "chapter1",
            started: true,
            trail: action.cinematic,
          };
        if (userState.user.campaign.chapter1.trail !== undefined)
          userState.user.campaign.chapter1.trail = action.cinematic;
        updateUser(userState.user);
      }
    },
    [userState.user]
  );

  useEffect(() => {
    setPlayerState({
      type: "init",
      player: { name: userState.user.user, nation: Nations.AthensGal },
    });
    if (!userState.user.campaign.chapter1)
      userState.user.campaign.chapter1 = {
        id: "chapter1",
        started: true,
        trail: 0,
      };
    if (!userState.user.campaign.chapter1.trail)
      userState.user.campaign.chapter1.trail = 0;
    updateUser(userState.user);
  }, []);

  return (
    <div>
      <Quest1 />
      {userState.user.campaign.chapter1.trail !== -1 ? (
        <Intro
          trail={onAction}
          remoteDialog={userState.user.campaign.chapter1.trail}
        />
      ) : null}
    </div>
  );
}

export default Chapter1;
