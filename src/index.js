import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
