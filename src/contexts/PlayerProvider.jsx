/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useReducer, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import Nations from "../enum/Nations";

const UserContext = createContext();

const userReducer = (userState, action) => {
  const { type } = action;
  switch (type) {
    case "set-resource": {
      const { resourceId, value } = action;
      const newUser = { ...userState };
      newUser.resources[resourceId] = newUser.resources[resourceId]
        ? newUser.resources[resourceId] + value
        : value;
      return newUser;
      break;
    }
    case "logged-out":
      return {};
    case "logged-in": {
      const { user } = action;
      return { user };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const UserProvider = ({ children }) => {
  const [userState, setUserState] = useReducer(userReducer, {
    user: { id: "sito", nation: Nations.AthensGal, resources: {} },
  });

  const value = { userState, setUserState };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("userContext must be used within a Provider");
  return context;
};

export { UserProvider, useUser };
