import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./index.css";

import clarity from "@microsoft/clarity";

// ✅ Initialize Microsoft Clarity
clarity.init("upg2o3p3zr"); // <-- put your Clarity Project ID here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
