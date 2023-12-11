import { createBrowserRouter } from "react-router-dom";

import { HomePageAsFC } from "./pages/HomePage";

import { HomePageLayoutAsFC } from "./Layouts/HomePageLayout";
import CoursePageLayout from "./Layouts/CoursePageLayout";
import Courses from "./pages/Courses";

export const routes = createBrowserRouter([
  {
    element: <HomePageLayoutAsFC />,
    path: "/",
    children: [
      { path: "/", element: <HomePageAsFC /> },
      { path: "/courses", element: <Courses /> },
    ],
  },
  {
    element: <CoursePageLayout />,
    path: "/courses",
    children: [{ index: true, element: <Courses /> }],
  },
]);
