import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";
import { Router } from "../router";
import useAuth from "../hooks/useAuth";
import axiosDefault from "../api/axios";

// pages
import Presentation from "./Presentation";
import Dashboard from "./Dasboard";
import Enrollment from "./Enrollment";
import Settings from "./Settings";
import Signin from "./Signin";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Lock from "./Lock";
import NotFoundPage from "./NotFound";
import ServerError from "./ServerError";
import Watch from "./Watch";
import Registration from "./Registration";
import Overview from "./Overview";
import Admission from "./Admission";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import RequireAuth from "../components/RequireAuth";
import useRefreshToken from "../hooks/useRefreshToken";
import Account from "./Account";
import ProgramDetail from "./ProgramDetail";

const ROLES = ["candidate"];

const RouteWithLoader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <Preloader show={loaded ? false : true} />
      <Outlet />
    </>
  );
};

const RouteWithSidebar = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem("settingsVisible") === "false" ? false : true;
  };

  const [showSettings, setShowSettings] = useState(
    localStorageIsSettingsVisible
  );

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem("settingsVisible", !showSettings);
  };

  // is user is not authenticated, redirect to sign in page
  return (
    <>
      <Preloader show={loaded ? false : true} />
      <Sidebar />
      <main className="content">
        <Navbar />
        <Outlet />
        <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
      </main>
    </>
  );
};

export default () => {
  return (
    <Routes>
      {/* pages */}
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/" element={<RouteWithLoader />}>
        <Route path={Router.Presentation.path} element={<Presentation />} />
        <Route path={Router.Watch.path} element={<Watch />} />
        <Route path={`${Router.Signin.path}/:id`} element={<Signin />} />
        <Route path={Router.Signup.path} element={<Signup />} />
        <Route path={Router.ForgotPassword.path} element={<ForgotPassword />} />
        <Route path={Router.ResetPassword.path} element={<ResetPassword />} />
        <Route path={Router.Lock.path} element={<Lock />} />
        <Route path={Router.ServerError.path} element={<ServerError />} />
        <Route path={Router.Admission.path} element={<Admission />} />
        <Route
          path={`${Router.ProgramDetail.path}/:id`}
          element={<ProgramDetail />}
        />

        <Route
          element={<RequireAuth allowedRoles={["prospective", "admin"]} />}
        >
          <Route path={Router.Registration.path} element={<Registration />} />
        </Route>
      </Route>

      <Route path="/platform" element={<RouteWithSidebar />}>
        <Route
          element={
            <RequireAuth allowedRoles={["admin"]} />
          }
        >
          <Route path={Router.Overview.path} element={<Overview />} />
          <Route path={Router.Dashboard.path} element={<Dashboard />} />
          <Route path={Router.Enrollment.path} element={<Enrollment />} />
          <Route path={Router.Account.path} element={<Account />} />
          <Route path={Router.Settings.path} element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};
