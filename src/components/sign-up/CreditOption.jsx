import React , {useState} from "react";
import VisaImage from "/home/firas/Desktop/netflix-clone/src/assets/images/visa_icon.png"
import MasterCard from "/home/firas/Desktop/netflix-clone/src/assets/images/mastercard_icon.png"
import AmericanExpress from "/home/firas/Desktop/netflix-clone/src/assets/images/american_express_icon.png"

import { BsCreditCard2Back , BsQuestionCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
function CreditOption(){
    const [showMoreDetails , setShowMoreDetails] = useState(false);
    return(
        <div className="credit-option-container">   
            <p>Step 3 of 3</p>
            <h4>Set up your credit or debit card</h4>
            <div className="cards">
                <img src={VisaImage} />
                <img src={MasterCard} />
                <img src={AmericanExpress}/>
            </div>  
            <form>
                <div className="card-number">
                    <input type="number" min={0} placeholder="Card Number"/>
                    <div className="card-icon" ><BsCreditCard2Back /></div>
                </div>
                <div className="exp-date-and-cvv">
                    <div className="exp-date">
                        <input type="text" placeholder="Expiration date"/>
                    </div>
                    <div className="cvv">
                        <input type="text" placeholder="CVV"/>
                        <div className="question-mark-icon"><BsQuestionCircle /></div>
                    </div>
                </div>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <div className="subscription-plan">
                    <div>
                        <span>USD9.99/month</span>
                        <p>Premium</p>
                    </div>
                    <NavLink>Change</NavLink>
                </div>
                <p className="terms"> 
                    By checking the checkbox below, you agree to our <NavLink>Terms of Use</NavLink>,<NavLink>Privacy Statement</NavLink> , 
                    and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently USD7.99/month) 
                    to your payment method until you cancel. You may cancel at any time to avoid future charges.
                </p>
                <div className="checkbox-container">
                    <input type="checkbox" id="agree" />
                    <label htmlFor="agree">I agree.</label>
                </div>
                <button type="submit">Start Membership</button>
            </form>
            <p className="learn-more">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            {!showMoreDetails && 
            <span 
            onClick={() => setShowMoreDetails(!showMoreDetails)}
            >
            learn more
            </span>}
            { showMoreDetails && <p className="more-details">
                The information collected by Google reCAPTCHA is subject to the Google <NavLink>Privacy Policy</NavLink> and <NavLink>Terms of Service</NavLink>, 
                and is used for providing, maintaining, 
                and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
            </p>}
        </div>
    );
}
export default CreditOption;