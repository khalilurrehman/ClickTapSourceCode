import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  Link,
  HashRouter,
  BrowserRouter as Router
} from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Articles from "./components/Articles";
import Mostviewed from "./components/Mostviewed";

const routing = (
  <HashRouter basename="/">
    <div>
      <Route exact path="/" component={Articles} />
      <Route path="/detail/:id" component={Mostviewed} />
    </div>
  </HashRouter>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
