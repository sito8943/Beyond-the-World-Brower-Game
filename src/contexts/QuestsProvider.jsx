/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useReducer, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import Nations from "../enum/Nations";

const QuestsContext = createContext();

const questsReducer = (questsState, action) => {
  const { type } = action;
  switch (type) {
    case "init": {
      const { value } = action;
      return { quests: value };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const QuestsProvider = ({ children }) => {
  const [questsState, setQuestsState] = useReducer(questsReducer, {
    quests: [],
  });

  const value = { questsState, setQuestsState };
  return (
    <QuestsContext.Provider value={value}>{children}</QuestsContext.Provider>
  );
};

QuestsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useQuests = () => {
  const context = useContext(QuestsContext);
  if (context === undefined)
    throw new Error("questsContext must be used within a Provider");
  return context;
};

export { QuestsProvider, useQuests };
