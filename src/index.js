import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./common.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "font-awesome/css/font-awesome.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
