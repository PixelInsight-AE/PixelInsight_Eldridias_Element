import React from "react";
import ReactDOM from "react-dom/client";
import EldridiasElement from "./EldridiasElement.jsx";
import { BrowserRouter } from "react-router-dom";
// ! we need to wrap the app in a BrowserRouter for it to work....

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <EldridiasElement />
    </BrowserRouter>
  </React.StrictMode>
);
