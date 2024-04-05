import React, { useState, useEffect } from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import './SignupForm.css';
import FormButton from "../../Components/FormButton";
import MediaBar from "../../Components/MediaBar";

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    /*const [isFormSubmitted, setIsFormSubmitted] = useState(false);*/
    const [isSubmitting, setIsSubmitting] = useState(false);
    

    const validate = values => {
        const errors = {};

        if (!values.fullName) {
            errors.fullName = "Required";
        } /*else if (values.fullName.length < 3) {
            errors.fullName = "must be at least 3 characters";
        } else if (values.fullName.length > 15) {
            errors.fullName = "must be 15 characters or less";
        }*/

        if (!values.email) {
            errors.email = "Required";
        }
        if (!values.password) {
            errors.password = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords do not match";
        }
        return errors;
    };

    const handleNavigate = (path) => {
        // Navigation logic
        console.log('Navigating to:', path);
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        setIsSubmitting(true);
        /*setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);*/
        try {
            const response = await axios.post('/signup', values);
            console.log(response.data);

            handleNavigate('/login');
        } catch (error) {
            console.error('Error signing up: ', error);
        } finally {
            setIsSubmitting(true);
        }
    };

    const togglePassword = () => {
        setShowPassword((prev) => (!prev));
    };

    useEffect(() => {
        if (isSubmitting) {
            handleNavigate('/login');
        }
    }, [isSubmitting, handleNavigate]);



    return (
        <div className="signupPage">
            <div className="signupForm"> 
                <Formik
                    initialValues={{
                        fullName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validate={validate}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form action="" className="form">
                        <h3 className="title">Welcome to AgroWize</h3>
                        <p className="subtitle">Let's Create Your Account</p>
                        <div className="formLbl">
                            <label htmlFor="fullName" className="lbl">Full Name</label>
                            <Field type="text" name="fullName" className="input" placeholder="Enter your full name" />
                            <ErrorMessage name="fullName" component="div" className="error" />
                        </div>
                        <div className="formLbl">
                            <label htmlFor="email" className="lbl">Enter your email address</label>
                            <Field type="email" name="email" className="input" placeholder="example@gmail.com" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className="formLbl">
                            <label htmlFor="password" className="lbl">Password</label>
                            <Field type={showPassword ? "text" : "password"} name="password" className="input" placeholder="Create a secure password" />
                            <FontAwesomeIcon icon={showPassword ? faLockOpen : faLock} className="icon" onClick={togglePassword} />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <div className="formLbl">
                            <label htmlFor="confirmPassword" className="lbl">Re-enter Password</label>
                            <Field type={showPassword ? "text" : "password"} name="confirmPassword" className="input" placeholder="Re-enter your password" />
                            <FontAwesomeIcon icon={showPassword ? faLockOpen : faLock} className="icon" onClick={togglePassword} />
                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                        </div>
                        <FormButton name="Create Account" disabled={isSubmitting} />
                        <MediaBar
                            registerText="Or Register with"
                            loginText="Login"
                        />
                    </Form>
                    )}
                </Formik>
                {/*<FormButton name="Create Account"/>
                <MediaBar
                    registerText="Or Register with"
                    loginText="Login"
                />*/}
                </div>
        </div>
    );
};

export default SignupForm;