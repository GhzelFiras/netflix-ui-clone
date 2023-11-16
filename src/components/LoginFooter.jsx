import React from "react";
import { NavLink } from "react-router-dom";

function LoginFooter(){
    return (
        <div className="login-footer">
            
            <div className="links">
                <NavLink>Questions? Contact us.</NavLink>
                <div className="secondary-links">
                    <NavLink>FAQ</NavLink>
                    <NavLink>Help Center</NavLink>
                    <NavLink>Terms of use</NavLink>
                    <NavLink>Privacy</NavLink>
                    <NavLink>Cookie Preferences</NavLink>
                    <NavLink>Corporate Information</NavLink>
                </div>
            </div>
        </div>
    )
}
export default LoginFooter;