import { Link, Outlet } from "react-router-dom"; 
import { HeaderAsFC } from "../components/Header";
import { NavbarAsFC } from "../components/Navbar";
import { FooterAsFC } from "../components/Footer";


const HomePageLayoutAsFC : React.FC = ( ) =>{

    return (

        
<div>
 
        <HeaderAsFC />

        <div className="main">
         <Outlet />
        </div>
        <FooterAsFC />
        </div>



    );
}

export default HomePageLayoutAsFC