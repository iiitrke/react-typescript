import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MobileNav } from "./MobileNav";
import Navbar from "./Navbar";
import { DropdownFC } from "./DropdownFC";

const Header = (props: { sticky?: boolean }) => {
  const [stick, setStick] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 120) {
      setStick(true);
    } else {
      setStick(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <header className={stick ? "sticky" : ""}>
        <div className="nav-area">
          {/* <Link to="/" className="logo">
            Itasca Technologies
          </Link> */}

          {/* for large screens */}
          {/* <Navbar /> */}
          <DropdownFC />
          {/* for small screens */}
          <MobileNav />
        </div>
      </header>
    </>
  );
};

export { Header };
