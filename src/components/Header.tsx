import React, { useEffect, useState } from "react";
import "./Header.css";

import { Button } from "@storybook/design-system";
import { log } from "console";
import { NavbarAsFC } from "./Navbar";

export const HeaderAsFC: React.FC = () => {
 

  return (
    <>

      <div id="header" className="header">
        <div className="banner">
         
            <NavbarAsFC />
      
        </div>
      </div>
    </>
  );
};
