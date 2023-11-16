import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(){
    return (
        <div className="navbar-container">
            <div className="navbar">
                <span className="logo">NETFLIX</span>
                <div className="navbar-menu">
                    <select className="langs">
                        <option value="english">English</option>
                        <option value="français">français</option>
                        <option value="العربية">العربية</option>
                    </select>
                    <NavLink to="login" className="sign-in-button">Sign In</NavLink>
                </div>
            </div>
        </div>
    );
}
export default Navbar;