import React from "react";
import { Header } from "../components/navbar/Header";
import { Outlet } from "react-router-dom";
import FooterFc from "../components/footer/FooterFc";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <FooterFc />
    </div>
  );
};

export { Root };
