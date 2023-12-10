import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Post from "./Post";

import { Route, Routes } from "react-router-dom";
import { BookAsFC } from "./pages/Book";
import BookListAsFC from "./pages/BookList";
import NewBookAsFC from "./pages/NewBook";
import NotFoundAsFC from "./pages/NotFound";
import BookListRouteAsFC from "./routes/BookListRoute";
import { BrowserRouter } from "react-router-dom";

import { HomePageAsFC } from "./pages/HomePage";
import { HomePageLayoutAsFC } from "./Layouts/HomePageLayout";
import { LandingPageAsFC } from "./pages/LandingPage";
import { LoginPageLayoutFC } from "./Layouts/LoginPageLayout";
import { LoginPage } from "./pages/LoginPage";
import Courses from "./pages/Courses";
import CoursePageLayout from "./Layouts/CoursePageLayout";
import { BreakpointProvider } from "./context/BreakpointProvider";
import { Parent } from "./props/Parent";
// import { Switch } from "react-router-dom";
function App() {
  return (
    <BreakpointProvider>
      <div className="App container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePageLayoutAsFC />}>
              <Route index element={<HomePageAsFC />} />
              <Route path="courses" element={<Courses />}></Route>
              <Route path="landing" element={<LandingPageAsFC />}></Route>
              <Route path="book" element={<BookAsFC />}>
                {" "}
              </Route>
              <Route path="books" element={<BookListAsFC />}>
                {" "}
              </Route>
            </Route>
            <Route path="/courses" element={<CoursePageLayout />}>
              <Route index element={<Courses />} />
            </Route>

            <Route path="/login" element={<LoginPageLayoutFC />}>
              <Route index element={<LoginPage />}></Route>
            </Route>

            <Route path="/admin"></Route>
            <Route path="*" element={<HomePageAsFC />}>
              <Route path="*" element={<NotFoundAsFC />} />
              xx
            </Route>
          </Routes>
        </BrowserRouter>

        {/* <HomeLayoutAsFC />
      <Routes> 
      <Route path='/booklist' element={<BookListAsFC />} > </Route>
      <Route path='/books/*' element={<BookListRouteAsFC />}>
       
      </Route>
      <Route path='*' element={<NotFoundAsFC />}></Route> 
      </Routes> */}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Post  />
        <MyButton   title='A Button' disabled={false} />
      </header>
 */}
      </div>
    </BreakpointProvider>
  );
}

export default App;
