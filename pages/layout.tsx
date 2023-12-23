import * as React from "react";
import Navbar from "../src/components/navbar/Navbar";
import { AppBarFC } from "../src/components/navbar/AppBarFC";
import { FooterAsFC } from "../src/components/Footer";
import { Provider } from "react-redux";
import { store } from "../src/state";

const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AppBarFC />
      {children}
    </Provider>
  );
};

export default AppRootLayout;
