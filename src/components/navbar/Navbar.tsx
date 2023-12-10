import React from "react";
import { menuItemsData } from "../..//menuItemsData";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu: any, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
