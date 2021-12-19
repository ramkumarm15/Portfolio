import React from "react";
import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";

import App from "./App";

import "./styles/app.css";

const Appsource = (
   <HashRouter>
      <App />
   </HashRouter>
);

const RootElement = document.getElementById("root");

ReactDOM.render(Appsource, RootElement);
