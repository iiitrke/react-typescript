import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Post from "./Post";

import { Route, RouterProvider, Routes } from "react-router-dom";
import { BookAsFC } from "./pages/Book";
import BookListAsFC from "./pages/BookList";
import NewBookAsFC from "./pages/NewBook";
import NotFoundAsFC from "./pages/NotFound";
import BookListRouteAsFC from "./routes/BookListRoute";
import { BrowserRouter } from "react-router-dom";

import { HomePageAsFC } from "./pages/HomePage";
import { LandingPageAsFC } from "./pages/LandingPage";
import { LoginPageLayoutFC } from "./Layouts/LoginPageLayout";
import { LoginPage } from "./pages/LoginPage";
import Courses from "./pages/Courses";
import CoursePageLayout from "./Layouts/CoursePageLayout";
import { BreakpointProvider } from "./context/BreakpointProvider";
import { Parent } from "./props/Parent";
import { HomePageLayoutAsFC } from "./Layouts/HomePageLayout";
import { routes } from "./Routers";
// import { Switch } from "react-router-dom";
function App() {
  return (
    <div className="App container">
      <BreakpointProvider>
        <RouterProvider router={routes} />
      </BreakpointProvider>
    </div>
  );
}

export default App;
