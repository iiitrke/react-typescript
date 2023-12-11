import React from "react";
import { menuItemsData } from "../..//menuItemsData";
import { MenuItems } from "./MenuItems1";
import "./Navbar.css";

const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu: any, index) => {
          return <MenuItems item={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
