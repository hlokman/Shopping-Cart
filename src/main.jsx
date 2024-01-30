import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App.jsx";
//import CatOne from "./components/categories/Jewelry.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Checkout from "./components/Checkout.jsx";
import Shop from "./components/Shop.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:name",
    element: <App />,
    //children: [{ path: "catone", element: <CatOne /> }],
  },
  {
    path: "/:name/:subname",
    element: <App />,
  },
  {
    path: "/:name/:subname/:product",
    element: <App />,
  },
  /*{
    path: "/checkout",
    element: <Checkout />,
  },*/
  /*{
    path: "/:name/:subname",
    element: <App />,
    children: [],
  },*/
  /*{
    path: "shop",
    element: <Shop />,
  },*/
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
