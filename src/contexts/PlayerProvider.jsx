/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useReducer, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import Nations from "../enum/Nations";

const PlayerContext = createContext();

const playerReducer = (playerState, action) => {
  const { type } = action;
  switch (type) {
    case "set-resource": {
      const { resourceId, value } = action;
      const newPlayer = { ...playerState };
      newPlayer.resources[resourceId] = newPlayer.resources[resourceId]
        ? newPlayer.resources[resourceId] + value
        : value;
      return newPlayer;
      break;
    }
    case "logged-out":
      return {};
    case "logged-in": {
      const { player } = action;
      return { player };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const PlayerProvider = ({ children }) => {
  const [playerState, setPlayerState] = useReducer(playerReducer, {
    player: { id: "sito", nation: Nations.AthensGal, resources: {} },
  });

  const value = { playerState, setPlayerState };
  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

PlayerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined)
    throw new Error("playerContext must be used within a Provider");
  return context;
};

export { PlayerProvider, usePlayer };
