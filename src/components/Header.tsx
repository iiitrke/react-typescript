import React, { useEffect, useState } from "react";
import "./Header.css";

import { Button } from "@storybook/design-system";
import { log } from "console";
import { NavbarAsFC } from "./Navbar";

export const HeaderAsFC: React.FC = () => {
  function isSticky() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY >= 80) {
      navbar?.classList.add("nav-bar", "is-sticky");
    } else {
        navbar?.classList.add("nav-bar");
      navbar?.classList.remove("is-sticky");
    }
  }

  useEffect(() => {
    console.log("In Use Effect");
    window.addEventListener("scroll", isSticky);
    return () => {
      console.log("In Use Effect Return ");
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  return (
    <>

      <div id="header" className="header">
        <div className="banner">
        <div id="navbar" className="navbar container">
            <NavbarAsFC />
        </div>
        </div>
      </div>
    </>
  );
};
