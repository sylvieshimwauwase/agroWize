import React from "react";
import SignupForm from "../Components/SignupForm/SignupForm";
import FormNavbar from "../Components/FormNavbar/FormNavbar";

const SignUp = () => {
    return (
        <div>
            <FormNavbar title="Create Account"/>
            <SignupForm />
        </div>
    );
}

export default SignUp;