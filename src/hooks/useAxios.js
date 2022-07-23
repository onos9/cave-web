import React, { useRef } from "react";
import { axiosPrivate as axios } from "../api/axios";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/Provider";
import useRefreshToken from "./useRefreshToken";

const useAxios = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const refresh = useRefreshToken();
  const axiosCall = useRef(false);
  useEffect(() => {
    if (!axiosCall.current) {
      const requestIntercept = axios.interceptors.request.use(
        (config) => {
          if (!config.headers["Authorization"]) {
            config.headers[
              "Authorization"
            ] = `Bearer ${state?.auth?.accessToken}`;
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
            const newAccessToken = await refresh();
            prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
            return axios(prevRequest);
          }
          return Promise.reject(error);
        }
      );

      return () => {
        axiosCall.current = true;
        axios.interceptors.request.eject(requestIntercept);
        axios.interceptors.response.eject(responseIntercept);
      };
    }
  }, [state, refresh]);

  return axios;
};

export default useAxios;
