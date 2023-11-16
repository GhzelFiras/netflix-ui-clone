import React  , {useState} from "react";
import { BsCheckLg , BsCheckCircle} from "react-icons/bs";
import { NavLink } from "react-router-dom";
function SignUpPlanForm(){
    const [activeOption , setActiveOption] = useState(3);
    return(
        <div className="sign-up-planform">
            <p>Step 2 of 3</p>
            <h4>Choose the plan that’s right for you</h4>
            <ul>
                <li><BsCheckLg /> <p>Watch all you want. Ad-free.</p></li>
                <li><BsCheckLg /> <p>Recommendations just for you.</p> </li>
                <li><BsCheckLg /> <p>Change or cancel your plan anytime.</p> </li>
            </ul>
            <div className="plans">
                <div className="plans-title">
                    <div>Monthly price</div>
                    <div>Video quality</div>
                    <div>Resolution</div>
                    <div>Watch on your TV, computer, mobile phone and tablet</div>
                </div>
                <div className="plans-details">
                    <div className={activeOption == 1 ? "option active-option"  : "option"}
                    onClick={() => setActiveOption(1)}
                    >
                        <div>Basic</div>
                        <p className="price">USD3.99</p>
                        <p className="quality">Good</p>
                        <p className="resolution">720p</p>
                        <BsCheckLg /> 
                    </div>
                    <div className={activeOption == 2? "option active-option" : "option"}
                    onClick={() => setActiveOption(2)}
                    >
                        <div>Standard</div>
                        <p className="price">USD7.99</p>
                        <p className="quality">Better</p>
                        <p className="resolution">1080p</p>
                        <BsCheckLg /> 
                    </div>
                    <div className={activeOption == 3 ? "option active-option" : "option"}
                    onClick={() => setActiveOption(3)}
                    >
                        <div>Premium</div>
                        <p className="price">USD9.99</p>
                        <p className="quality">Best</p>
                        <p className="resolution">4k+HDR</p>
                        <BsCheckLg /> 
                    </div>
                </div>
            </div>
            <div className="more-details">
                <p>
                HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. 
                Not all content is available in all resolutions. See our Terms of Use for more details.
                </p>
                <p>
                Only people who live with you may use your account. 
                Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.
                </p>
            </div>
            <div className="btn-container">
                <NavLink to="../paymentPicker">Next</NavLink>
            </div>
            
            
        </div>
    );
}
export default SignUpPlanForm;