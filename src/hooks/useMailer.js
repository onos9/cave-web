import { useContext, useDebugValue } from "react";
import { GlobalContext } from "../context/Provider";
import useAxios from "./useAxios";

const useMailer = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const axios = useAxios();
  const mailState = state?.mail;

  useDebugValue(mailState, (mailer) =>
    mailer?.user ? "Logged In" : "Logged Out"
  );

  const dispatchLoading = () => {
    dispatch({ type: "LOADING" });
  };

  const dispatchSuccess = (res) => {
    dispatch({ type: "MAIL_SUCCESS", payload: res?.data });
  };

  const dispatchError = (err) => {
    const payload = err.response ? err.response?.data : "COULD NOT CONNECT";
    dispatch({ type: "ERROR", payload: payload });
  };

  const mailer = {
    getCredentials: () => {
      dispatchLoading();
      axios
        .get("/mail")
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    getToken: (token) => {
      dispatchLoading();
      axios
        .post("/mail/token", token)
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },

    sendMail: (mail) => {
      dispatchLoading();
      axios
        .post("/mail", mail)
        .then((res) => {
          dispatchSuccess(res);
        })
        .catch((err) => {
          dispatchError(err);
        });
    },
  };

  return { mailer, mailState };
};
export default useMailer;
