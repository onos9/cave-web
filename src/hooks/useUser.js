import { useContext, useDebugValue } from "react";
import { GlobalContext } from "../context/Provider";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";
import { Router } from "../router";

const useUser = () => {
  const { userState, setUser: dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const axios = useAxios(false);

  //console.log(userState);
  useDebugValue(userState, (user) => (user?.user ? "Logged In" : "Logged Out"));

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

  const user = {
    create: (user, state) => {
      dispatchLoading();
      axios
        .post(`/${id}`, user)
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    getOne: (id, state) => {
      dispatchLoading();
      axios
        .get(`/user/${id}`)
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    getAll: (state) => {
      dispatchLoading();
      axios
        .get("/user/")
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    updateOne: (user, id) => {
      dispatchLoading();
      axios
        .post(`/user/${id}`, user)
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    deleteOne: (data, id) => {
      dispatchLoading();
      axios
        .delete(`user/${id}`, data)
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },
  };

  return { user, userState };
};
export default useUser;

const getCodeUrl = async () => {
  const resp = await axios.get(`${apiV1}/api/v1/mail`);
  const params = new URLSearchParams(resp.data).toString();
  const url = `https://accounts.zoho.com/ouser/v2/user?${params}`;
  console.log(url);
};
