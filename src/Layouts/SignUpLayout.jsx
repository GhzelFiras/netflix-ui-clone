import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LoginFooter from "../components/LoginFooter";
function SignUpLayout(){
return(
    <>
        <nav className="sign-up-navbar">
            <div className="logo">NETFLIX</div>
            <NavLink>Sign Out</NavLink>
        </nav>
        <div className="sign-up-content">
            <Outlet />
        </div>
        <div className="sign-up-footer-container">
            <LoginFooter />
        </div>
    </>
);

}
export default SignUpLayout;