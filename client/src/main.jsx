import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PrimaryProvider from "./context/PrimaryProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimaryProvider>
        <App />
      </PrimaryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
