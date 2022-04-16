import React from "react";
import ReactDOM from "react-dom";
import Home from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
