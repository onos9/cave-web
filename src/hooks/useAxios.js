import { axiosPrivate as axios } from "../api/axios";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Provider";
import useRefreshToken from "./useRefreshToken";

const useAxios = () => {
  const { authState } = useContext(GlobalContext);
  const refresh = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${authState?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          //const newAccessToken = await refresh();
          //prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          //return axios(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestIntercept);
      axios.interceptors.response.eject(responseIntercept);
    };
  }, [authState, refresh]);

  return axios;
};

export default useAxios;
