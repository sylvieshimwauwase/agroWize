import React from 'react'
import "./UserProfileChangePassword.css"
import { useState } from 'react';
import axios from 'axios';
import Keys from "../../../Constants/Keys";
import UserProfileHeader from "../UserProfileHeader/UserProfileHeader"
import VerticalNavbar from "../../VerticalNavBar/VerticalNavBar"
import SearchBar from '../../Search/SearchBar';
import FormButton from '../../FormButton';
import ConfirmPasswordChangePopupPage from '../../../Pages/ConfirmPasswordChangePopupPage';


const UserProfileChangePassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);

        const validateForm = () => {
          let isValid = true;
          let errors = {};

          if (!password) {
            errors.password = "Old password is required";
            isValid = false;
          }
          if (newPassword.length < 8) {
            errors.newPassword = "Password must be at least 8 characters long";
            isValid = false;
          }
          if (newPassword !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
            isValid = false;
          }

          setErrors(errors);
          return isValid;
        };
      /*const handleSubmit = async (e) => {
        e.preventDefault();
     if (validateForm()) {
      try {
        const response = await axios.post(`${Keys.base_url}/passwordChange`, {
          email,
          password,
          newPassword,
          confirmPassword
        });
        console.log(response.data);
        setIsPasswordChanged(true);

        setEmail('');
        setPassword('');
        setNewPassword('');
        setConfirmPassword('');

      } catch (error) {
        console.error("Error changing password: ", error);
        
      }
            //console.log('Submitting new password');
            // To add API call logic here to send data to the server
     }
        };*/
        const handleSubmit = async (e) => {
          e.preventDefault();
          if (validateForm()) {
            setIsPasswordChanged(true);
          }
        };
        
        const handleConfirmPasswordChange = async () => {
          try {
            const response = await axios.post(`${Keys.base_url}/passwordChange`, {
              email,
              password,
              newPassword,
              confirmPassword
            });
            console.log(response.data);
            setIsPasswordChanged(false); 

            setEmail('');
            setPassword('');
            setNewPassword('');
            setConfirmPassword('');
          } catch (error) {
            console.error("Error changing password: ", error);
            setIsPasswordChanged(false); 
          }
        };
        
        const handleCancelPasswordChange = () => {
          setIsPasswordChanged(false);

          setEmail('');
          setPassword('');
          setNewPassword('');
          setConfirmPassword('');
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
        <form onSubmit={handleSubmit} className="userProfileChangePasswordForm">
          <h3 className="formTitle">Change Password</h3>
          <div className="input-group">
            {/* <i className="fa fa-lock icon"></i> */}
            <label htmlFor="username">Email</label>
            <input
              type="text"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="error">{errors.email}</div>
            )}
            </div>
          <div className="input-group">
            {/* <i className="fa fa-lock icon"></i> */}
            <label htmlFor="username">Enter Old Password</label>
            <input
              type="password"
              placeholder="****************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.oldPassword && (
              <div className="error">{errors.oldPassword}</div>
            )}
          </div>
          <div className="forgot-password">
          <a href="/forgotPassword" className="forgot-password">
            Forgot password?
          </a>
          </div>
          <div className="input-group">
            <i className="fa fa-lock icon"></i>
            <label htmlFor="username">Enter New Password</label>
            <input
              type="password"
              placeholder="Create a secure password"
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
          </div>
          <FormButton name="Change Password" />
        </form>
        <div className="popupContainer">
          <ConfirmPasswordChangePopupPage
          onConfirm={handleConfirmPasswordChange} 
          onCancel={handleCancelPasswordChange}
          isOpen={isPasswordChanged} />
        </div>
      </div>
    </>
  );
}

export default UserProfileChangePassword