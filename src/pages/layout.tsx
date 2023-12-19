import React from "react";
import Navbar from "../components/navbar/Navbar";
import { AppBarFC } from "../components/navbar/AppBarFC";

const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AppBarFC />
        {children}
      </body>
    </html>
  );
};

export default AppRootLayout;
