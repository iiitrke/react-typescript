import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import { AppBarFC } from "../components/navbar/AppBarFC";
import { FooterAsFC } from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../state";

const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AppBarFC />
      {children}
    </Provider>
  );
};

export default AppRootLayout;