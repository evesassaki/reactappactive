import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { AuthContextProvider } from "./context/authContext.js";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
  </React.StrictMode>
);
