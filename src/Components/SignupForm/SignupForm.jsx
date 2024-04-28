import React, { useState } from "react";
import axios from 'axios';
import Keys from "../../Constants/Keys";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import './SignupForm.css';
import FormButton from "../../Components/FormButton";
import MediaBar from "../../Components/MediaBar";
import SignUpPopUpPage from "../../Pages/SignUpPopUpPage";

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    /*const [isFormSubmitted, setIsFormSubmitted] = useState(false);*/
    const [setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [isCreatedup, setIsCreatedup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    

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

    /*const handleNavigate = (path) => {
        // Navigation logic
        console.log('Navigating to:', path);
    };*/

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setIsLoading(true);
        setIsSubmitting(true);
        /*setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);*/
        try {
            let data = {
                fullname: values.fullName,
                username: values.email,
                userpassword: values.password,
                confirmpassword: values.confirmPassword
            };
            console.log("values", values);
            const response = await axios.post(`${Keys.base_url}/signup`, data);
            console.log(response.data);

            /*navigate('/signUpPopUpPage');*/
            setIsCreatedup(true);
            setIsLoading(false);
            resetForm();

        } catch (error) {
           setIsLoading(false);
            /*console.error('Error signing up: ', error);
            if (error.response && error.response.status === 400) {
                setError('User already exists');
                resetForm();
            } else {
                setError('An error occurred. Please try again later.');
            }*/
            if (!error?.response) {
                setError('No Server Response');
            } else if (error.response?.status === 409) {
                setError('Username Taken');
            } else {
                setError('Registration Failed')
            }
        } finally {
            setIsSubmitting(false);
        }
        resetForm();
    };

    const togglePassword = () => {
        setShowPassword((prev) => (!prev));
    };

    /*useEffect(() => {
        if (isSubmitting) {
            handleNavigate('/login');
        }
    }, [isSubmitting, handleNavigate]);*/



    return (
      <div className="signupPage">
        {isLoading && (
        <div className="loading">
          <center>Loading...</center>
        </div>
      )}
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
                  <label htmlFor="fullName" className="lbl">
                    Full Name
                  </label>
                  <Field
                    type="text"
                    name="fullName"
                    className="input"
                    placeholder="Enter your full name"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="formLbl">
                  <label htmlFor="email" className="lbl">
                    Enter your email address
                  </label>
                  <Field
                    type="text"
                    name="email"
                    className="input"
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="formLbl">
                  <label htmlFor="password" className="lbl">
                    Password
                  </label>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Create a secure password"
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faLockOpen : faLock}
                    className="icon"
                    onClick={togglePassword}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="formLbl">
                  <label htmlFor="confirmPassword" className="lbl">
                    Re-enter Password
                  </label>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="input"
                    placeholder="Re-enter your password"
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faLockOpen : faLock}
                    className="icon"
                    onClick={togglePassword}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error"
                  />
                </div>
                {error && <div className="error">{error}</div>}
                <FormButton name="Create Account" disabled={isSubmitting} />
                <MediaBar
                  registerText="Or Register with"
                  loginText="Login"
                  alreadyHaveAccountText="Already on AgroWize?"
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
        {isCreatedup && (
        <div className="popupContainer">
          <SignUpPopUpPage isOpen={isCreatedup} />
        </div>
      )}
      </div>
    );
};

export default SignupForm;