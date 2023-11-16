import React from "react";
import { NavLink } from "react-router-dom";
function Footer(){
    return (
        <>
            <NavLink className="main-link">Questions? contact us</NavLink>
            <div className="links-container">
                <NavLink>FAQ</NavLink>
                <NavLink>Investor Relations</NavLink>
                <NavLink>Privacy</NavLink>
                <NavLink>Speed Test</NavLink>
                <NavLink>Help Center</NavLink>
                <NavLink>Jobs</NavLink>
                <NavLink>Coockie Preferences</NavLink>
                <NavLink>Legal notices</NavLink>
                <NavLink>Account</NavLink>
                <NavLink>Ways to Watch</NavLink>
                <NavLink>Corporate information</NavLink>
                <NavLink>Only on Netflix</NavLink>
                <NavLink>Media Center</NavLink>
                <NavLink>Terms of Use</NavLink>
                <NavLink>Contact us</NavLink>
            </div>
        </>
    );
}
export default Footer;