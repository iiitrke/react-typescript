import { Link } from "react-router-dom";
import "./DesktopTopMenu.css";
import { FaHome, FaBook } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import { relative } from "path";
import { menuItemsData } from "../menuItemsData";

const DesktopTopMen = () => {
  // const navBarElement = useRef<HTMLElement>(null);

  function isSticky() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY >= 40) {
      navbar?.classList.add("is-sticky");
    } else {
      navbar?.classList.remove("is-sticky");
    }
  }

  useEffect(() => {
    // console.log("In Use Effect");
    window.addEventListener("scroll", isSticky);
    return () => {
      // console.log("In Use Effect Return ");
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  // if (width >= 700) {
  return (
    <>
      <nav
        className="navbar  container"
        id="navbar"
        style={{ display: "relative" }}
      >
        <h1 className="logo">Itasca Technologies</h1>
        <ul className="items">
          <li className="item">
            <FaHome className="icon" />
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <FaBook className="icon" />
            <Link to="/courses">Courses</Link>
          </li>
          <li className="item">
            <FaBook className="icon" />
            <Link to="/books">Registration</Link>
          </li>
          <li className="item">
            <FaBook className="icon" />
            <Link to="/books">Contactus</Link>
          </li>
          {/* <li className="item">
              <FaBook className="icon" />
              <Link to="/books">Books</Link>
            </li> */}
        </ul>
      </nav>
    </>
  );
  // } else {
  //   return <></>;
  // }
};
export { DesktopTopMen };
