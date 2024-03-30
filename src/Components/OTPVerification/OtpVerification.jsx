import React, { useState, useRef} from "react";
import './OtpVerification.css';
import FormButton from "../FormButton";

const OtpVerification = () => {
    const [otp, setOTP] = useState(["", "", "", "", "",""]);
    const otpInputsRef = useRef([]);

    const handleOTPChange = (index, value) => {
        if (isNaN(value)) return;
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);

        if (value && index < 5) {
            otpInputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
          // Move focus to the previous input box if Backspace is pressed and the current input is empty
          otpInputsRef.current[index - 1].focus();
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredOTP = otp.join("");
    };

    return (
        <div className="otpVerificationPage">
            <div className="otpVerificationForm">
            <form onSubmit={handleSubmit}>
                    <h3 className="otpVerificationTitle">OTP Verification</h3>
                    <p className="otpVerificationSubtitle">
                        Please check your email for the One-Time Password(OTP)
                        <br />to complete the verification process
                    </p>
                    <div className="otpVerificationContainer">
                        <h2>Enter your OTP</h2>
                        <div className="otpInputContainer">
                            {otp.map((digit, index) => (
                            <input 
                            type="text"
                            ref={(input) => (otpInputsRef.current[index] = input)}
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleOTPChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="otpInput"
                            />
                            ))}
                        </div>
                        
                    </div>
                    <a href="/resetPassword" className="forgot-password">
                        Resend OTP
                    </a>
                    <FormButton name="Verify" />
                </form>
            </div>

        </div>
    );
};

export default OtpVerification;