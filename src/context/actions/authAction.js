import axiosInstance from "../../helpers/axiosInstance";
import { Router } from "../../router";

export const useAuth = (dispatch, navigate) => ({
  signup: signup(dispatch, navigate),
  signin: signin(dispatch, navigate),
  signout: signout(dispatch, navigate),
});

const signup = (dispatch, navigate) => (user) => {
  dispatch({
    type: "LOADING",
  });

  axiosInstance()
    .post("/auth/signup", user)
    .then((res) => {
      dispatch({
        type: "SUCCESS",
        payload: res.data,
      });
        if (navigate) navigate(Router.Profile.path);
    })
    .catch((err) => {
      dispatch({
        type: "ERROR",
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
};

const signin = (dispatch, navigate) => (user) => {
  dispatch({
    type: "LOADING",
  });

  axiosInstance()
    .post("/auth/signin", user)
    .then((res) => {
      localStorage.token = res.data.token;
      dispatch({
        type: "SUCCESS",
        payload: res.data,
      });
        if (navigate) navigate(Router.Generator.path);
    })
    .catch((err) => {
      dispatch({
        type: "ERROR",
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
};

const signout = (dispatch, navigate) => (user) => {
  localStorage.removeItem("token");
  dispatch({
    type: "LOGOUT",
    payload: user,
  });
  if (navigate) navigate(Router.Signin.path);
};

const updateOne =
  (dispatch) =>
  (data, id, url = null) => {
    dispatch({
      type: "LOADING",
    });
    axiosInstance()
      .post(`/auth/${id}`, data)
      .then((res) => {
        dispatch({
          type: "SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR",
          payload: err.response ? err.response.data : "CONNECTION_ERROR",
        });
      });
  };

const deleteOne =
  (dispatch) =>
  (data, id, url = null) => {
    dispatch({
      type: "LOADING",
    });
    axiosInstance()
      .delete(`/auth/${id}`, data)
      .then((res) => {
        dispatch({
          type: "SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR",
          payload: err.response ? err.response.data : "CONNECTION_ERROR",
        });
      });
  };
