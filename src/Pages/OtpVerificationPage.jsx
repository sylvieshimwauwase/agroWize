import React from "react";
import FormNavbar from "../Components/FormNavbar/FormNavbar";
import OtpVerification from "../Components/OTPVerification/OtpVerification";

const OtpVerificationPage = () => {
    return (
        <div>
            <FormNavbar title="Log In" />
            <OtpVerification />
        </div>
    );
}

export default OtpVerificationPage;