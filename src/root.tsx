import React from "react";
import { Header } from "./components/navbar/Header";
// import { Outlet } from "react-router-dom";
import FooterFc from "./components/footer/FooterFc";
import { AppBarFC } from "./components/navbar/AppBarFC";

const Root = () => {
  return (
    <div>
      {/* <Header /> */}
      <AppBarFC />
      {/* <div className="content"> */}
      {/* <Outlet /> */}
      {/* </div> */}
      <FooterFc />
    </div>
  );
};

export { Root };
