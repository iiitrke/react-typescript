import React from "react";
import Navbar from "../components/navbar/Navbar";
import { AppBarFC } from "../components/navbar/AppBarFC";
import { FooterAsFC } from "../components/Footer";

const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AppBarFC />
        {children}
        <FooterAsFC />
      </body>
    </html>
  );
};

export default AppRootLayout;
