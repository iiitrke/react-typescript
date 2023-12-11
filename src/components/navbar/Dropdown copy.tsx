import React from "react";
import { MenuItem } from "./types";
import { MenuItems } from "./MenuItems1";

interface DropdownProps {
  depthLevel: number;
  submenus: any;
  dropdown: boolean;
}

const Dropdown = ({ submenus, dropdown, depthLevel }: DropdownProps) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu: any, index: number) => (
        <MenuItems item={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default { Dropdown };
