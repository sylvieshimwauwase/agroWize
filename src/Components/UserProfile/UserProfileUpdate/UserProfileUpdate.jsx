import React, { useState } from "react";
import axios from "axios";
import Keys from "../../../Constants/Keys";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./UserProfileUpdate.css";
import FormButton from "../../FormButton";
import SearchBar from "../../Search/SearchBar";
import UserProfileUpdateSuccessPopup from "../../../Pages/UserProfileUpdateSuccessPopup";

const UserProfileUpdate = ({ userName }) => {
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Required";
    } else if (values.fullName.length < 3) {
      errors.fullName = "must be at least 3 characters";
    } else if (values.fullName.length > 15) {
      errors.fullName = "must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.nickname) {
      errors.nickname = "Required";
    }

    if (!values.contact) {
      errors.contact = "Required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      handleUpdateProfile(e);
    }
  };
  const handleUpdateProfile = async (e) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const values = e.target.elements;
      let data = {
        fullname: values.fullName.value,
        email: values.email.value,
        nickname: values.nickname.value,
        Contact: values.contact.value,
      };
      console.log("values", values);
      const response = await axios.post(`${Keys.base_url}/updateProfile`, data);
      console.log(response.data);
      setIsProfileUpdated(true);
      setIsLoading(false);

      /*resetForm();*/

    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "An error occurred. Please try again later.";
      setErrorMessage(errorMessage);
    }
    }

  const handleCancelUpdateProfile = () => {
    setIsProfileUpdated(false);

    /*resetForm();*/
  }

  return (
    <div className="userProfileUpdate">
      
      {" "}
      {isLoading && (
        <div className="loading">
          <center>Loading...</center>
        </div>
      )}
      <div className="search-button">
        <SearchBar />
      </div>
      <div className="userProfileUpdateForm">
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            nickname: "",
            contact: "",
          }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form onSubmit={handleSubmit} action="" className="form">
              <div className="profileCircleForm">
                {/* Placeholder for profile picture */}
                <span>{userName}</span>
              </div>
              <div className="formLbl">
                <label htmlFor="fullName" className="lbl">
                  Name:
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
                  Email Address:
                </label>
                <Field
                  type="text"
                  name="email"
                  className="input"
                  placeholder="example@gmail.com"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="formLbl">
                <label htmlFor="nickname" className="lbl">
                  Nickname:
                </label>
                <Field
                  type="text"
                  name="nickname"
                  className="input"
                  placeholder="Enter your nickname"
                />
                <ErrorMessage
                  name="nickname"
                  component="div"
                  className="error"
                />
              </div>
              <div className="formLbl">
                <label htmlFor="contact" className="lbl">
                  Contact:
                </label>
                <Field
                  type="text"
                  name="contact"
                  className="input"
                  placeholder="Enter your Phone Number"
                />
                <ErrorMessage
                  name="contact"
                  component="div"
                  className="error"
                />
              </div>
            </Form>
          )}
        </Formik>
        <FormButton name="Update Profile" />
      </div>
      <div className="popupContainer">
        <UserProfileUpdateSuccessPopup
        onConfirm={handleUpdateProfile} 
        onCancel={handleCancelUpdateProfile}
        isOpen={isProfileUpdated} />
      </div>
    </div>
  );
  };

export default UserProfileUpdate;
