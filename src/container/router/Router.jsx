import React, { Component } from "react";

// pages
import Home from "container/pages/Home/Home";
import About from "container/pages/About/About";
import Contact from "container/pages/Contact/Contact";
import NavbarTop from "components/Navbar/NavbarTop";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class RouterApp extends Component {
  render() {
    return (
      <Router>
        <NavbarTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default RouterApp;
