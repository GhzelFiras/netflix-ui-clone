import React from "react";
import { BsCheckLg , BsCheckCircle} from "react-icons/bs";
import { NavLink } from "react-router-dom";
function SignUpPlan(){
    return(
        <div className="sign-up-plan">
            <BsCheckCircle />
            <p>Step 1 of 3</p>
            <h4>Choose your plan.</h4>
            <ul>
                <li><BsCheckLg /> <p>No commitments, cancel anytime.</p></li>
                <li><BsCheckLg /> <p>Everything on Netflix for one low price.</p> </li>
                <li><BsCheckLg /> <p>Unlimited viewing on all your devices.</p> </li>
            </ul>
            <NavLink to="planform">Next</NavLink>
        </div>
            
    );
}
export default SignUpPlan;