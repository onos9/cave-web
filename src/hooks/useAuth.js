import { useContext, useDebugValue, useEffect, useState } from "react";
import { GlobalContext } from "../context/Provider";
import { useNavigate, useLocation } from "react-router-dom";
import useAxios from "./useAxios";
import { Router } from "../router";

const useAuth = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axios = useAxios();
  const authState = state?.auth;

  useDebugValue(authState, (auth) => (auth?.user ? "Logged In" : "Logged Out"));

  const dispatchLoading = () => {
    dispatch({ type: "LOADING" });
  };

  const dispatchSuccess = (res) => {
    dispatch({ type: "AUTH_SUCCESS", payload: res?.data });
  };

  const dispatchError = (err) => {
    const payload = err.response ? err.response?.data : "COULD NOT CONNECT";
    dispatch({ type: "ERROR", payload: payload });
  };

  const auth = {
    signup: (user, state, type) => {
      dispatchLoading();
      axios
        .put(`/auth/${type}`, user)
        .then((res) => {
          dispatchSuccess(res);
          if (state) navigate(state.pathname, { state: state, replace: true });
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    signin: (user, state) => {
      dispatch({ type: "LOADING" });
      axios
        .post("/auth", user)
        .then((res) => {
          dispatchSuccess(res);
          navigate(state?.route, {
            state: state,
            replace: true,
          });
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    signout: (user, state) => {
      dispatch({ type: "LOADING" });
      axios
        .delete("/auth", user)
        .then((res) => {
          dispatchSuccess(res);
          navigate(`${Router.Signin.path}/id`, {
            state: { from: location, refresh: true },
          });
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    verify: (token) => {
      dispatch({ type: "LOADING" });
      axios
        .post(`/auth/${token}`)
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },
  };

  return { auth, authState };
};
export default useAuth;
