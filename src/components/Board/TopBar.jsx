import React from "react";

// icons
import Funds from "../IconButtons/Funds";
import Dead from "../IconButtons/Souls";
import Mana from "../IconButtons/Mana";

// contexts
import { useUser } from "../../contexts/UserProvider";

// enum
import Nations from "../../enum/Nations";

// styles
import "./styles.css";

export default function TopBar() {
  const { userState } = useUser();

  return (
    <div className="w-full px-2 flex top-bar items-center justify-between bg-light-primary">
      <div className="menu flex items-center justify-start"></div>
      <div className="resources gap-3 flex items-center justify-end">
        {userState.user?.nation === Nations.AthensGal ? (
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
