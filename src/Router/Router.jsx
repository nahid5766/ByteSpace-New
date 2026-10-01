import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Creators from "../Pages/Creators/Creators";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        index: true,
        loader: () => fetch("/courseData.json"),
        element: <Home></Home>,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        path: "creators",
        element: <Creators></Creators>,
      },
    ],
  },
]);
