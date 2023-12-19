import React from "react";

export const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <h1> Hello India</h1>
        {children}
      </body>
    </html>
  );
};
