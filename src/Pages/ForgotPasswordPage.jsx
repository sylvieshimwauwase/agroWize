import React from "react";
import '../Components/ForgotPassword/ForgotPassword';
import FormNavbar from "../Components/FormNavbar/FormNavbar";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";

const ForgotPasswordPage = () => {
    return (
        <div>
            <FormNavbar title="Log In"/>
            <ForgotPassword />
        </div>
    );
}

export default ForgotPasswordPage;