import React from 'react'
import "./UserProfileChangePassword.css"
import { useState } from 'react';
import UserProfileHeader from "../UserProfileHeader/UserProfileHeader"
import VerticalNavbar from "../../VerticalNavBar/VerticalNavBar"
import SearchBar from '../../Search/SearchBar';
import { Link } from 'react-router-dom';


const UserProfileChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errors, setErrors] = useState({});

        const validateForm = () => {
          let isValid = true;
          let errors = {};

          if (!oldPassword) {
            errors.oldPassword = "Old password is required";
            isValid = false;
          }
          if (newPassword.length < 8) {
            errors.newPassword = "Password must be at least 8 characters long";
            isValid = false;
          }
          if (newPassword !== confirmNewPassword) {
            errors.confirmNewPassword = "Passwords do not match";
            isValid = false;
          }

          setErrors(errors);
          return isValid;
        };
      const handleSubmit = (e) => {
        e.preventDefault();
     if (validateForm()) {
            console.log('Submitting new password');
            // To add API call logic here to send data to the server
     }
        };
  return (
    <>
      <UserProfileHeader />
      <VerticalNavbar />
      <div className="userProfileUpdate">
        {" "}
        <div className="search-button">
          <SearchBar />
        </div>
        <form onSubmit={handleSubmit} className="userProfileUpdateForm">
          <h3 className="formTitle">Certificates</h3>
          <div className="input-group">
            {/* <i className="fa fa-lock icon"></i> */}
            <label htmlFor="username">Enter Old Password</label>
            <input
              type="password"
              placeholder="Enter old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            {errors.oldPassword && (
              <div className="error">{errors.oldPassword}</div>
            )}
          </div>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <div className="input-group">
            <i className="fa fa-lock icon"></i>
            <label htmlFor="username">Enter New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {errors.newPassword && (
              <div className="error">{errors.newPassword}</div>
            )}
          </div>
          <div className="input-group">
            <i className="fa fa-lock icon"></i>
            <label htmlFor="username">Re-enter New Password</label>
            <input
              type="password"
              placeholder="Re-enter new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            {errors.confirmNewPassword && (
              <div className="error">{errors.confirmNewPassword}</div>
            )}
          </div>
          <button type="submit">Change Password</button>
        </form>
      </div>
    </>
  );
}

export default UserProfileChangePassword