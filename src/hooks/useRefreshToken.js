import axios from "../api/axios";
import { useContext } from "react";
import { GlobalContext } from "../context/Provider";

const useRefreshToken = () => {
  const [state, setAuth] = useContext(GlobalContext);

  const refresh = async () => {
    setAuth({ type: "LOADING" });
    try {
      const response = await axios.get("/auth", {
        withCredentials: true,
      });
      setAuth({ type: "AUTH_SUCCESS", payload: response?.data });
      //console.log(response);
      return response?.data?.accessToken;
    } catch (err) {
      const payload = err.response ? err.response?.data : "COULD NOT CONNECT";
      setAuth({ type: "ERROR", payload: payload });
      return null;
    }
  };

  return refresh;
};

export default useRefreshToken;
