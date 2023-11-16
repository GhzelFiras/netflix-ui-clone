import React from "react";
import { FcLock } from "react-icons/fc";
import { AiOutlineLock } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import VisaImage from "/home/firas/Desktop/netflix-clone/src/assets/images/visa_icon.png"
import MasterCard from "/home/firas/Desktop/netflix-clone/src/assets/images/mastercard_icon.png"
import AmericanExpress from "/home/firas/Desktop/netflix-clone/src/assets/images/american_express_icon.png"
import { NavLink } from "react-router-dom";
function PaymentPicker(){
    return(
        <div className="payment-picker">
            <div className="main-lock-container">
                <AiOutlineLock />
            </div>
            <p className="step-count">Step 3 of 3</p>
            <h4>Choose how to pay</h4>
            <p className="encrypted-payment">Your payment is encrypted and you can change how you pay anytime.</p>
            <p className="secure-payment">Secure for peace of mind. Cancel easily online.</p>
            <div className="end-2-end-encrypted"><p>End-to-end encrypted</p><FcLock /></div>
            <NavLink className="payment-card" to="../creditoption">
                <div>
                    <p>Credit or Debit Card</p>
                    <img src={VisaImage} />
                    <img src={MasterCard} />
                    <img src={AmericanExpress}/>
                </div>                   
                <MdArrowForwardIos />
            </NavLink>
        </div>
    );
}
export default PaymentPicker;