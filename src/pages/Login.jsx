import React , {useState} from "react";
import { NavLink } from "react-router-dom";
import LoginFooter from "../components/LoginFooter";
function Login(){
    const [showPassword,setShowPassword] = useState(true);
    function showToggleButton(){
        const passwordButton = document.querySelector('.password-button');
        passwordButton.style.display = "block";
        const passwordContainer = document.querySelector('.password-container');
        const input = passwordContainer.querySelector('input');
        input.style.width = '82%';
    }
    document.addEventListener('click', (e) => {
        const passwordContainer = document.querySelector('.password-container');
        if(e.target !== passwordContainer && !passwordContainer.contains(e.target)){
            const passwordButton = document.querySelector('.password-button');
            passwordButton.style.display = "none";            
            const passwordContainer = document.querySelector('.password-container');
            const input = passwordContainer.querySelector('input');
            input.style.width = '100%';
        }
    })
    return(
        <div className="login-container">
            <div className="logo login-logo">NETFLIX</div>
            <div className="login-form-container">
                <div className="form">
                    <form className="login-form">
                        <p>Sign In</p>
                        <input type="email" placeholder="Email or phone number" />
                        <div className="password-container">
                            <input type={showPassword ? 'password' : 'text'} placeholder="Password" onFocus={showToggleButton} />
                            <p className="password-button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'show' : 'hide'}</p>
                        </div>
                        <button type="submit">Sign in</button>
                    </form>
                    <div className="other-options">
                        <div className="remember-me">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <NavLink>need Help?</NavLink>
                    </div>
                    <p className="new-2-netflix">New to Netflix ?<NavLink>Sign Up now</NavLink></p>
                    <p className="learn-more">This page is protected by Google reCAPTCHA to ensure you're not a bot. <NavLink>Learn more</NavLink></p>
                </div>
            </div>
            <div className="login-footer-container">
                <LoginFooter />
            </div>
        </div>
    );
}
export default Login;