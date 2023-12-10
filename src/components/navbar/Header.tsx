import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MobileNav } from "./MobileNav";

const Header = (props: { sticky: boolean }) => {
  const [stick, setStick] = useState(false);

  const scrollHandler = () => {
    console.log("ScrollHandler Called");
    if (window.scrollY > 120) {
      setStick(true);
    } else {
      setStick(false);
    }
  };

  useEffect(() => {
    console.log("USE EFFECT CALLED");
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <header className={stick ? "sticky" : ""}>
        <div className="nav-area">
          <Link to="/" className="logo">
            Logo
          </Link>

          {/* for large screens */}
          <Navbar />

          {/* for small screens */}
          <MobileNav />
        </div>
      </header>
    </>
  );
};

export { Header };
