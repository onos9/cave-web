import axios from "../api/axios";
import { useContext } from "react";
import { GlobalContext } from "../context/Provider";

const useRefreshToken = () => {
  const { setAuth } = useContext(GlobalContext);

  const refresh = async () => {
    setAuth({ type: "LOADING" });
    try {
      const response = await axios.get("/auth", {
        withCredentials: true,
      });
      setAuth({ type: "SUCCESS", payload: response?.data });
      return response.data.accessToken;
    } catch (error) {
      const payload = err.response ? err.response?.data : "COULD NOT CONNECT";
      setAuth({ type: "ERROR", payload: payload });
    }
  };
  return refresh;
};

export default useRefreshToken;
