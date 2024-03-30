import React from "react";
import './ForgotPassword.css';
import FormButton from "../FormButton";

const ForgotPassword = () => {
    return (
        <div className="forgotPasswordPage">
            
            <div className="forgotPasswordForm">
                <form>
                    <h3 className="forgotPasswordTitle">Forgot Password</h3>
                    <p className="forgotPasswordSubtitle">Enter your account email below, and we'll send a reset link</p>
                    <div className="forgotPasswordInput">
                        <label htmlFor="email" className="lbl">Enter your email address</label>
                        <input type="email" className="input"/>
                    </div>
                    <a href="/otpVerification" className="forgot-password">
                        Back to login
                    </a>
                    <FormButton name="Continue" />
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;