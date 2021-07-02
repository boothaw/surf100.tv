import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";

import EventPage from "./pages/event/index";
import SplashPage from "./pages/splash/index";
import Contact from "./pages/contact/index";
import Trestles from "./pages/trestles/index";
import Wa from "./pages/wa/index";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <SplashPage />
      </Route>
      <Route exact path="/event">
        <EventPage />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/trestles">
        <Trestles />
      </Route>
      <Route exact path="/wa">
        <Wa />
      </Route>
    </Router>
  );
}

export default App;
