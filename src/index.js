import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Today from "./Today";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tomorrow from "./Tomorrow";
import About from "./About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Today />,
  },
  {
    path: "/tomorrow",
    element: <Tomorrow />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
