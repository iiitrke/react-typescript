"use client";
import * as React from "react";
import Navbar from "../src/components/navbar/Navbar";
import { AppBarFC } from "../src/components/navbar/AppBarFC";
import { FooterAsFC } from "../src/components/Footer";
import { Provider } from "react-redux";
import { store } from "../src/state";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {" "}
        <Provider store={store}>
          <AppBarFC />
          {children}
          {/* <FooterAsFC /> */}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
