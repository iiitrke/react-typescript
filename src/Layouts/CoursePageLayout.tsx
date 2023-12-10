
import { Link, Outlet } from "react-router-dom"; 
import { HeaderAsFC } from "../components/Header";
import { NavbarAsFC } from "../components/Navbar";
import { FooterAsFC } from "../components/Footer";
import { useEffect } from "react";
import './CoursePage.css';


const CoursePageLayout : React.FC = ( ) =>{

    useEffect(() =>{
        const navbar = document.getElementById('navbar');
        console.log(navbar);
        navbar?.classList.add("courses");
        return(()=>{
            navbar?.classList.remove("courses")
            console.log("Unmounted");
        }
            );
    })

    return (

        
<div className="courses-layout">
 
        <NavbarAsFC />

        <div className="main">
         <Outlet />
        </div>
        <FooterAsFC />
        </div>
 

    );
}

export default CoursePageLayout;