import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IconContext.Provider
    value={{ color: "white", className: "global-class-name" }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IconContext.Provider>
);
