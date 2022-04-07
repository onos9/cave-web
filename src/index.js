import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

// core styles
import "./scss/volt.scss";
import "./styles/global.css";

// vendor styles
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import { Provider } from "./context/Provider";
import { store } from "./store/store";

ReactDOM.render(
  <Provider>
    <HashRouter basename="/">
      <ScrollToTop />
      <HomePage />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
