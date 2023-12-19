import React from "react";
import Navbar from "../components/navbar/Navbar";

const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default AppRootLayout;
