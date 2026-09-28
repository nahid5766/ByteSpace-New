import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
