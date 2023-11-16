import React from "react";
import { NavLink } from "react-router-dom";

function Error(){
    return (
        <>
        <nav className="error-navbar">
            <span className="logo">NETFLIX</span>
        </nav>
        <main className="error-main">
            <div className="error-container">
                <h1>Lost your way ?</h1>
                <p>sorry we can't find that page. you'll find lots to explore on the home page</p>
                <NavLink to="/">Netflix Home</NavLink>
                <div className="error-message-container">
                    <p>Error Code <span>NSES-404</span></p>
                </div>
            </div>
        </main>
        </>
    );
}
export default Error;