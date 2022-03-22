import React, { useState, useEffect } from 'react'

import { Route, Routes, Navigate, Outlet } from "react-router-dom"
import { Router } from "../router"

// pages
import Presentation from "./Presentation"
import Dashboard from "./Dashbaord"
import Transactions from "./Transactions"
import Settings from "./Settings"
import Signin from "./Signin"
import Signup from "./Signup"
import ForgotPassword from "./ForgotPassword"
import ResetPassword from "./ResetPassword"
import Lock from "./Lock"
import NotFoundPage from "./NotFound"
import ServerError from "./ServerError"
import Watch from './Watch'
import Registration from './Registration'
import Home from './Home'

// components
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Preloader from "../components/Preloader"


const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader show={ loaded ? false : true } />
      <Outlet />
    </>
  )
}

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible)

  const toggleSettings = () => {
    setShowSettings(!showSettings)
    localStorage.setItem('settingsVisible', !showSettings)
  }

  return (
    <>
      <Preloader show={ loaded ? false : true } />
      <Sidebar />

      <main className="content">
        <Navbar />
        <Outlet />
        <Footer toggleSettings={ toggleSettings } showSettings={ showSettings } />
      </main>
    </>
  )
}

export default () => (
  <Routes>

    {/* pages */ }
    <Route path='*' element={ <NotFoundPage /> } />
    <Route path="/" element={ <RouteWithLoader /> } >
      <Route path={ Router.Presentation.path } element={ <Presentation /> } />
      <Route path={ Router.Registration.path } element={ <Registration /> } />
      <Route path={ Router.Watch.path } element={ <Watch /> } />
      <Route path={ Router.Signin.path } element={ <Signin /> } />
      <Route path={ Router.Signup.path } element={ <Signup /> } />
      <Route path={ Router.ForgotPassword.path } element={ <ForgotPassword /> } />
      <Route path={ Router.ResetPassword.path } element={ <ResetPassword /> } />
      <Route path={ Router.Lock.path } element={ <Lock /> } />
      <Route path={ Router.ServerError.path } element={ <ServerError /> } />
    </Route>

    <Route path="/dash" element={ <RouteWithSidebar /> } >
      <Route path={ Router.Home.path } element={ <Home /> } />
      <Route path={ Router.Dashboard.path } element={ <Dashboard /> } />
      <Route path={ Router.Transactions.path } element={ <Transactions /> } />
      <Route path={ Router.Settings.path } element={ <Settings /> } />
    </Route>
  </Routes >
)
