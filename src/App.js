import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { data } from "./api";
import Articles from "./components/Articles";

function App() {
  return <Articles data={data} />;
}

export default App;
