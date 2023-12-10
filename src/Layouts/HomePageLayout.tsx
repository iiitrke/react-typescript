import { Link, Outlet } from "react-router-dom";
import { HeaderAsFC } from "../components/Header";
import { NavbarAsFC } from "../components/Navbar";
import { FooterAsFC } from "../components/Footer";
import { Header } from "../components/navbar/Header";

const HomePageLayoutAsFC: React.FC = () => {
  return (
    <div>
      <Header sticky={true} />

      <div className="main">
        <Outlet />
      </div>
      <FooterAsFC />
    </div>
  );
};

export { HomePageLayoutAsFC };
