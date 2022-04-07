import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { authState } = useAuth();
  console.log(authState);
  const location = useLocation();
  const isRole = authState?.roles?.find((role) => allowedRoles?.includes(role));
  return isRole && authState?.accessToken ? (
    <Outlet />
  ) : authState?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;
