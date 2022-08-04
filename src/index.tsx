// modules
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import { DataProvider } from "context";

// styles
import "modern-normalize";
import "css/index.css";
import "css/variables.css";

// components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      {/* <DataProvider> */}
      <App />
      {/* </DataProvider> */}
    </Router>
  </React.StrictMode>
);
