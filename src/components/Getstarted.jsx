import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
function GetStarted(){
    return (
        <div className="form-container">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form>
            <input type="email" name="email" placeholder="Email Address"/>
            <button type="submit">
                Get Started
                <MdOutlineArrowForwardIos />
            </button>
            </form>
        </div>
    );
}
export default GetStarted;