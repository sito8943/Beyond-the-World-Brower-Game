import React from "react";

// icons
import Funds from "../IconButtons/Funds";
import Dead from "../IconButtons/Souls";
import Mana from "../IconButtons/Mana";

// contexts
import { usePlayer } from "../../contexts/PlayerProvider";
import { useQuests } from "../../contexts/QuestsProvider";

// enum
import Nations from "../../enum/Nations";

// styles
import "./styles.css";

export default function TopBar() {
  const { playerState } = usePlayer();
  const { questsState } = useQuests();

  return (
    <div className="w-full px-4 flex top-bar items-center justify-between bg-light-primary">
      <h2 className="text-xl font-bold text-white">{questsState.title}</h2>
      <div className="menu flex items-center justify-start"></div>
      <div className="resources gap-3 flex items-center justify-end">
        {playerState.user?.nation === Nations.AthensGal ? (
          <>
            <Dead
              numberClassName="text-white"
              className="text-white transition hover:bg-dark-primary rounded-circle"
            />
            <Funds
              numberClassName="text-white"
              className="text-white transition hover:bg-dark-primary rounded-circle"
            />
          </>
        ) : null}
        <Mana
          numberClassName="text-white"
          className="text-white transition hover:bg-dark-primary rounded-circle"
        />
      </div>
    </div>
  );
}
