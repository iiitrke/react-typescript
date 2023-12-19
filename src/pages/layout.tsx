import React from "react";
import Navbar from "../components/navbar/Navbar";
import { AppBarFC } from "../components/navbar/AppBarFC";
import { FooterAsFC } from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../state";

const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AppBarFC />
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default AppRootLayout;
