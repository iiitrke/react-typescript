import React from "react";
import { Outlet } from "react-router-dom";



export const LoginPageLayoutFC: React.FC = ()=>{

    return (
        <>
        <h2>Login Page Layout</h2>
        <Outlet /> 
        </>
    );
}