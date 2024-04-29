import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MyContextProvider } from "./context/MyContextProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import Routes from "./Router/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import 'react-tooltip/dist/react-tooltip.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvider>
      <HelmetProvider>
        <RouterProvider router={Routes} />
      </HelmetProvider>
      <ToastContainer />
    </MyContextProvider>
  </React.StrictMode>
);
