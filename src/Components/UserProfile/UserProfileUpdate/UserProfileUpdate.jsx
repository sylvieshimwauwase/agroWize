import React, { useEffect, useState } from "react";
import axios from "axios";
import Keys from "../../../Constants/Keys";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./UserProfileUpdate.css";
import FormButton from "../../FormButton";
import Popup from "../../PopupMessage/Popup/Popup";
import SmallSizeFormButton from "../../SmallSizeFormButton/SmallSizeFormButton";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../Search/SearchBar";
import UserProfileUpdateSuccessPopup from "../../../Components/PopupMessage/UserProfileUpdateSuccessPopup";

const UserProfileUpdate = () => {
  const [setIsSubmitting] = useState(false);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const validate = values => {
    const errors = {};

    if (!values.fullname) {
      errors.fullName = "Required";
    } else if (values.fullname.length < 3) {
      errors.fullname = "must be at least 3 characters";
    } else if (values.fullname.length > 15) {
      errors.fullname = "must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.nickname) {
      errors.nickname = "Required";
    }

    if (!values.phoneno) {
      errors.phoneno = "Required";
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsLoading(true);

    try {
      let data = {
        fullname: values.fullname,
        email: values.email,
        nickname: values.nickname,
        phoneno: values.phoneno
      };

      const response = await axios.put(`${Keys.base_url}/updateProfile`, data);
      console.log(response.data);
      // setIsProfileUpdated(true);
      setIsLoading(false);
      handleCancelClick();
      resetForm();

    } catch (error) {
      setIsLoading(false);
      if (!error?.response) {
        setError('No Server Response');
      } else {
        setError('user already exists');
      }
      resetForm();
    } finally {
      setIsSubmitting(false);
      resetForm();
    }
  };

  const handleCancelClick = () => {
    setIsVisible(!isVisible);
  }
  const handleLoginClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    console.log("useEffec");
    const fetchProfile = async () => {
      try {
        console.log("fetchProfile");
        const response = await axios.get(`${Keys.base_url}/profile`);
        console.log("fetchedProfile", response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  // const handleCancelUpdateProfile = () => {
  //   setIsProfileUpdated(false);

  //   /*resetForm();*/
  // }

  return (
    <div className="userProfileUpdate">
      {isLoading && (
        <div className="loading">
          <center>Loading...</center>
        </div>
      )}
      <Popup isVisible={isVisible}
        handleCancelClick={handleCancelClick}
        text="Congratulations!"
        paragraph="Your account has been created successfully."
        button={
          <div>
            <SmallSizeFormButton name="Login" onClick={handleLoginClick} />
          </div>
        }
      />
      {/* {" "} */}

      <div className="userProfileUpdateForm">

        <Formik
          initialValues={{
            fullname: "",
            email: "",
            nickname: "",
            phoneno: "",
          }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form onSubmit={handleSubmit} action="" className="form">
              <div className="profileCircleForm">
                <img src="/User Profile Avatar.png" alt="Profile pic" />
                <a href="/userProfileUpdate" className="editProfile">Replace image</a>
              </div>
              <div className="formLbl">
                <label htmlFor="fullname" className="lbl">
                  Name:
                </label>
                <Field
                  type="text"
                  name="fullname"
                  className="input"
                  placeholder="Enter your full name"
                />
                <ErrorMessage
                  name="fullname"
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
                <label htmlFor="phoneno" className="lbl">
                  phoneno:
                </label>
                <Field
                  type="text"
                  name="phoneno"
                  className="input"
                  placeholder="Enter your Phone Number"
                />
                <ErrorMessage
                  name="phoneno"
                  component="div"
                  className="error"
                />
                {error && <div className="error">{error}</div>}
              </div>
              <FormButton name="Update Profile" disabled={isSubmitting} />
            </Form>
          )}
        </Formik>

      </div>

    </div>
  );
};

export default UserProfileUpdate;
