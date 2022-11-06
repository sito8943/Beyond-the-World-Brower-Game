/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import * as React from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const UserContext = React.createContext();

const userReducer = (userState, action) => {
  const { type } = action;
  switch (type) {
    case "set": {
      const { user, resources } = action;
      return {
        user,
        resources,
      };
    }
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const UserProvider = ({ children }) => {
  const [userState, setUserState] = React.useReducer(userReducer, {
    user: "name",
    resources: [],
  });

  const value = { userState, setUserState };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined)
    throw new Error("userContext must be used within a Provider");
  return context;
};

export { UserProvider, useUser };
