import React from "react";
import ReactDOM from "react-dom/client";
import Eldridia from "./Eldridia";
import { BrowserRouter } from "react-router-dom";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Eldridia />
    </BrowserRouter>
  </React.StrictMode>
);
