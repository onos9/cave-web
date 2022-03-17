import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import { Routes } from "../routes"

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
    <Route { ...rest } render={ props => (<> <Preloader show={ loaded ? false : true } /> <Component { ...props } /> </>) } />
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
    <Route { ...rest } render={ props => (
      <>
        <Preloader show={ loaded ? false : true } />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component { ...props } />
          <Footer toggleSettings={ toggleSettings } showSettings={ showSettings } />
        </main>
      </>
    ) }
    />
  )
}

export default () => (
  <Switch>
    <RouteWithLoader exact path={ Routes.Presentation.path } component={ Presentation } />
    <RouteWithLoader exact path={ Routes.Signin.path } component={ Signin } />
    <RouteWithLoader exact path={ Routes.Signup.path } component={ Signup } />
    <RouteWithLoader exact path={ Routes.ForgotPassword.path } component={ ForgotPassword } />
    <RouteWithLoader exact path={ Routes.ResetPassword.path } component={ ResetPassword } />
    <RouteWithLoader exact path={ Routes.Lock.path } component={ Lock } />
    <RouteWithLoader exact path={ Routes.NotFound.path } component={ NotFoundPage } />
    <RouteWithLoader exact path={ Routes.ServerError.path } component={ ServerError } />

    <RouteWithLoader exact path={ Routes.Watch.path } component={ Watch } />
    <RouteWithLoader exact path={ Routes.Registration.path } component={ Registration } />

    {/* pages */ }
    <RouteWithSidebar exact path={ Routes.Dashboard.path } component={ Dashboard } />          
    <RouteWithSidebar exact path={ Routes.Transactions.path } component={ Transactions } />
    <RouteWithSidebar exact path={ Routes.Settings.path } component={ Settings } />

    <RouteWithSidebar exact path={ Routes.Home.path } component={ Home } />

    <Redirect to={ Routes.NotFound.path } />
  </Switch>
)
