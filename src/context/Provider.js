import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./reducer";
import axios from "../api/axios";

export const GlobalContext = createContext({});

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {});

  useEffect(() => {
    const isEmpty = !Object.entries(state).length;
    if (isEmpty) {
      dispatch({ type: "LOADING" });
      axios
        .get("/auth", { withCredentials: true })
        .then((res) => {
          dispatch({ type: "AUTH_SUCCESS", payload: res?.data });
        })
        .catch((err) => {
          const payload = err.response
            ? err.response?.data
            : "COULD NOT CONNECT";
          dispatch({ type: "ERROR", payload: payload });
        });
    }
    if (!isEmpty) console.log(state);
  }, [state]);

  const store = [state, dispatch];

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};
