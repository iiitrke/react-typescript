import React from "react";
import Navbar from "../components/navbar/Navbar";
import { AppBarFC } from "../components/navbar/AppBarFC";
import { FooterAsFC } from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../state";

<<<<<<< HEAD
const AppRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AppBarFC />
      {children}
    </Provider>
  );
=======
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
>>>>>>> 5f988e57903be787bca27559f2e79fbf6830842a
};

export default RootLayout;
