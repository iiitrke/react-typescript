"use client";
import * as React from "react";
import Navbar from "../src/components/navbar/Navbar";
import { AppBarFC } from "../src/components/navbar/AppBarFC";
import { FooterAsFC } from "../src/components/Footer";
import { Provider } from "react-redux";
import { store } from "../src/state";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../src/components/auth-provider.tsx/AuthProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {" "}
        <Provider store={store}>
          <AuthProvider>
            <AppBarFC />
            {children}
            {/* <FooterAsFC /> */}
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
