import React from "react";
import "./MediaBar.css";

const MediaBar = ({ registerText, loginText }) => {
    return (
        <div className="mediaBarSection">
            <div className="registerLine">
                <div className="leftLine"></div>
                <div className="buttonText">{registerText}</div>
                <div className="rightLine"></div>
            </div>
            <div className="mediaBar">
                <div className="imageBar">
                    <img src="/facebook_ic.png" alt="facebook" />
                </div>
                <div className="imageBar">
                    <img src="/google_ic.png" alt="google" />
                </div>
                <div className="imageBar">
                    <img src="/Vector.png" alt="vector" />
                </div>
            </div>
            <div  className="termsAndConditions">
                <p className="terms1">
                    By Signing up, you agree to our <a className="terms2" href="/terms-of-use">Terms of Use</a> and <a className="terms3" href="/privacy-policy">Privacy Policy</a>
                </p>
                <p className="terms1">
                    Already on AgroWize? <a className="terms2" href={loginText.toLowerCase() }>{loginText}</a>
                </p>
            </div>
        </div>
        
    );
}

export default MediaBar;