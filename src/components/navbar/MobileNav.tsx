import React, { useEffect, useRef, useState } from "react";
import { menuItemsData } from "../../menuItemsData";
import { MobileMenuItems } from "./MobileMenuItems";
import { FaBars, FaHamburger, FaHdd, FaXbox } from "react-icons/fa";

const MobileNav = () => {
  const depthLevel = 0;
  const [showMenu, setShowMenu] = useState(false);
  let ref: any = useRef();

  useEffect(() => {
    const handler = (event: any) => {
      if (showMenu && ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showMenu]);

  return (
    <nav className="mobile-nav">
      <button
        className="mobile-nav__menu-button"
        type="button"
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        {showMenu ? <FaXbox /> : <FaBars />}
        {""}
      </button>

      {showMenu && (
        <ul className="menus" ref={ref}>
          {menuItemsData.map((menu, index) => {
            return (
              <MobileMenuItems
                items={menu}
                key={index}
                depthLevel={depthLevel}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export { MobileNav };
