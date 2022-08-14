import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Preloader from "../components/Preloader";
import { Router } from "../router";

const RequireAuth = ({ allowedRoles }) => {
  const { authState } = useAuth();
  const location = useLocation();
  const isRole = authState?.roles?.find((role) => allowedRoles?.includes(role));

  return isRole && authState?.login ? (
    <Outlet />
  ) : !authState?.login && authState ? (
    <Navigate
      to={`${Router.Signin.path}/user`}
      state={{ from: location }}
    />
  ) : authState?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Preloader show={!!authState} />
  );
};

export default RequireAuth;
