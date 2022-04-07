import { useContext, useDebugValue, useEffect, useState } from "react";
import { GlobalContext } from "../context/Provider";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";
import { Router } from "../router";

const useAuth = () => {
  const { authState, setAuth: dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const axios = useAxios();

  //console.log(authState);
  useDebugValue(authState, (auth) => (auth?.user ? "Logged In" : "Logged Out"));

  const dispatchLoading = () => {
    dispatch({ type: "LOADING" });
  };
  const dispatchSuccess = (res) => {
    dispatch({ type: "SUCCESS", payload: res?.data });
  };

  const dispatchError = (err) => {
    const payload = err.response ? err.response?.data : "COULD NOT CONNECT";
    dispatch({ type: "ERROR", payload: payload });
  };

  const auth = {
    signup: (user, state) => {
      dispatchLoading();
      axios
        .post("/auth/signup", user)
        .then((res) => {
          dispatchSuccess(res);
          if (state) navigate(state.path, { state: state, replace: true });
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
          navigate(state?.path ? state?.path : Router.Dashboard.path, {
            state: state,
            replace: true,
          });
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    signout: (user, state) => {
      dispatch({ type: "LOGOUT", payload: user });
      if (state) navigate(state.path, { replace: true });
    },

    refresh: () => {
      dispatch({ type: "LOADING" });
      axios
        .get("/auth")
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

const getCodeUrl = async () => {
  const resp = await axios.get(`${apiV1}/api/v1/mail`);
  const params = new URLSearchParams(resp.data).toString();
  const url = `https://accounts.zoho.com/oauth/v2/auth?${params}`;
  console.log(url);
};
