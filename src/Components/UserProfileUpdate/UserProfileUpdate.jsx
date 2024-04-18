import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./UserProfileUpdate.css";
import FormButton from "../FormButton";
import SearchBar from "../Search/SearchBar";

const UserProfileUpdate = ({ userName }) => {

    const validate = values => {
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

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className="userProfileUpdate">
            <div className="userProfileUpdateForm">
                <div className="search-button">
                    <SearchBar />
                </div>
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
                        <Form action="" className="form">
                             <div className="profileCircleForm">
                            {/* Placeholder for profile picture */}
                            <span>{userName}</span>
                            </div>
                        <div className="formLbl">
                            <label htmlFor="fullName" className="lbl">Name:</label>
                            <Field type="text" name="fullName" className="input" placeholder="Enter your full name" />
                            <ErrorMessage name="fullName" component="div" className="error" />
                        </div>
                        <div className="formLbl">
                            <label htmlFor="email" className="lbl">Email Address:</label>
                            <Field type="text" name="email" className="input" placeholder="example@gmail.com" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className="formLbl">
                            <label htmlFor="nickname" className="lbl">Nickname:</label>
                            <Field type="text" name="nickname" className="input" placeholder="Enter your nickname" />
                            <ErrorMessage name="nickname" component="div" className="error" />
                        </div>
                        <div className="formLbl">
                            <label htmlFor="contact" className="lbl">Contact:</label>
                            <Field type="text" name="contact" className="input" placeholder="Enter your Phone Number" />
                            <ErrorMessage name="contact" component="div" className="error" />
                            </div>
                    </Form>
                    )}
                </Formik>
                <FormButton name="Update Profile"/>
                </div>
        </div>
    )
};

export default UserProfileUpdate;