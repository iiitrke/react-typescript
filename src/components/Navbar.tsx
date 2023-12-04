import React from "react";
import { Link } from "react-router-dom";
import DesktopTopMen from "./DesktopTopMenu";
import MobileTopMenu from "./MobileTopMenu";

export const NavbarAsFC : React.FC =() =>{

    return (
 <>
   <DesktopTopMen />
      <MobileTopMenu />
  </>
    )
}