import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/now-ui-kit.css";
// import "assets/css/now-ui-kit.min.css";
// import "assets/css/now-ui-kit.css.map";
import "assets/demo/demo.css";

// import Index from "views/Index.js";

import reportWebVitals from "./reportWebVitals";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route path="/about" exact render={(props) => <About {...props} />} />
      <Route path="/contact" exact render={(props) => <Contact {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
