import React from "react";
import Navbar from "../components/navbar/Navbar";

export const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
