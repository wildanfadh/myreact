// library
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// page
// import App from "./App";
import RouterApp from "container/router/Router";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/bootstrap.min.css";
import "assets/css/now-ui-kit.css";
import "assets/css/now-ui-kit.min.css";
import "assets/css/now-ui-kit.css.map";
import "assets/demo/demo.css";

ReactDOM.render(
  <React.Fragment>
    <RouterApp />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
