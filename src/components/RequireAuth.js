import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Preloader from "../components/Preloader";
import { Router } from "../router";

const RequireAuth = ({ allowedRoles }) => {
  const { auth, authState } = useAuth();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const isRole = authState?.roles?.find((role) => allowedRoles?.includes(role));

  useEffect(() => {
    if (authState?.loading) setLoaded(authState?.loading);
  }, [authState?.loading]);

  useEffect(() => {
      if (!loaded && !authState?.login && authState) {
        navigate(Router.Signin.path+"/kglas4", {
          replace: true,
        });
      }
  }, [loaded, authState?.login]);

  return isRole && authState?.login ? (
    <Outlet />
  ) : authState?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Preloader show={loaded} />
  );
};

export default RequireAuth;
