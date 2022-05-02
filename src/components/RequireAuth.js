import React, { useEffect, useState } from "react";
import { useLocation, Outlet, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Preloader from "../components/Preloader";
import { Router } from "../router";

const RequireAuth = ({ allowedRoles }) => {
  const { auth, authState } = useAuth();
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState?.login) {
        navigate(`${Router.Signin.path}/id`, { state: { ...location } });
    } 
  }, [authState]);

  const isRole = authState?.roles?.find((role) => allowedRoles?.includes(role));

  return isRole && authState?.accessToken ? (
    <Outlet />
  ) : authState?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Preloader show={true} />
  );
};

export default RequireAuth;
