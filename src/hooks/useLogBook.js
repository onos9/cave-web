import { useContext, useDebugValue } from "react";
import { GlobalContext } from "../context/Provider";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";
import { Router } from "../router";

const useLogBook = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const navigate = useNavigate();
  const axios = useAxios(false);
  

  const logBookState = state?.logbook
  useDebugValue(state, (logBook) => (logBook?.logBook ? "Logged In" : "Logged Out"));

  const dispatchLoading = () => {
    dispatch({ type: "LOADING" });
  };
  const dispatchSuccess = (res) => {
    dispatch({ type: "LOGBOOK_SUCCESS", payload: res?.data });
  };

  const dispatchError = (err) => {
    const payload = err.response ? err.response?.data : "COULD NOT CONNECT";
    dispatch({ type: "ERROR", payload: payload });
  };

  const logBook = {
    create: (logBook, state) => {
      dispatchLoading();
      axios
        .post("/logbook", logBook)
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
        .get(`/logBook/${id}`)
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    getByEmail: (email, state) => {
      dispatchLoading();
      axios
        .get(`/logBook/${email}`)
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
        .get("/logBook/")
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    updateOne: (logBook, id) => {
      dispatchLoading();
      axios
        .patch(`/logBook/${id}`, logBook)
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
        .delete(`logBook/${id}`, data)
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },
  };

  return { logBook, logBookState };
};
export default useLogBook
