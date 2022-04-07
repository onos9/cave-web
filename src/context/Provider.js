import React, { createContext, useReducer } from "react";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";

export const GlobalContext = createContext({});

export const Provider = ({ children }) => {
  const [userState, setUser] = useReducer(userReducer, {});
  const [authState, setAuth] = useReducer(authReducer, {});
  
  const store = {
    authState,
    userState,
    setAuth,
    setUser,
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};
