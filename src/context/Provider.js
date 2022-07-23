import React, { createContext, useReducer, useEffect, useRef } from "react";
import Reducer from "./reducer";
import axios from "../api/axios";

export const GlobalContext = createContext({});

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {});
  const initialize = useRef(false);

  useEffect(() => {
    const isEmpty = !Object.entries(state).length;
    if (!initialize.current) {
      dispatch({ type: "LOADING" });
      axios
        .get("/auth", { withCredentials: true })
        .then((res) => {
          dispatch({ type: "AUTH_SUCCESS", payload: res?.data });
          // console.log(res?.data);
        })
        .catch((err) => {
          const payload = err.response
            ? err.response?.data
            : "COULD NOT CONNECT";
          dispatch({ type: "ERROR", payload: payload });
        });
      return () => initialize.current = true
    }
  }, [state]);

  const store = [state, dispatch];

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};
