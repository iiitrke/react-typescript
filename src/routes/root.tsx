import React from "react";
import { Header } from "../components/navbar/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export { Root };
