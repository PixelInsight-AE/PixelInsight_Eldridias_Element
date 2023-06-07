import React from "react";
import ReactDOM from "react-dom/client";
import Eldridia from "./Eldridia";
import { BrowserRouter } from "react-router-dom";
import "./main.scss";
import { Provider } from "react-redux";
import store from "../src/store/index.js";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Eldridia />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
