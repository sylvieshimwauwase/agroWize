import React, { useState } from "react";
import axios from "axios";
import Keys from "../../Constants/Keys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";
import './ResetPassword.css';
import FormButton from "../FormButton";
import ResetPasswordPopupPage from "../../Pages/ResetPasswordPopupPage";

const ResetPassword = () => {
    const [password, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isChanged, setIsChanged] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");

        try {
            setIsLoading(true);
            const response = await axios.put(`${Keys.base_url}/passwordReset`, { 
                email,
                password, 
                confirmPassword 
            });
            console.log(response.data);

            setIsChanged(true);
            setIsLoading(false);

            setEmail("");
            setNewPassword("");
            setConfirmPassword("");

            /*if (response.data.success) {
                setIsChanged(true);
                setIsLoading(false);

                setEmail("");
                setNewPassword("");
                setConfirmPassword("");
              }*/ /*else {
                setError(response.data.error || "Password reset failed");
                navigate("/login") // Set specific error message
              }*/
          } catch (error) {
            setIsLoading(false);
            console.error("Error logging in: ", error);
            /*setError("Invalid username or password");*/
            setError("An error occurred. Please try again later.");

            setEmail("");
            setNewPassword("");
            setConfirmPassword("");
          }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="resetPasswordPage">
            {isLoading && (
            <div className="loading">
            <center>Loading...</center>
            </div>
            )}
            <div className="resetPasswordForm">
                <form onSubmit={handleSubmit}>
                    <h2>Reset Password</h2>
                    <div className="resetPasswordInput">
                        <label htmlFor="email">Email</label>
                        <input
                            type= "text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="resetPasswordInput">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="newPassword"
                            value={password}
                            onChange={handleNewPasswordChange}
                            required
                        />
                        <FontAwesomeIcon
                                icon={showPassword ? faLockOpen : faLock}
                                className="password-toggle"
                                onClick={togglePasswordVisibility}
                        />
                    </div>
                    <div className="resetPasswordInput">
                        <label htmlFor="newPassword">Confirm Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                        <FontAwesomeIcon
                                icon={showPassword ? faLockOpen : faLock}
                                className="password-toggle"
                                onClick={togglePasswordVisibility}
                        />
                    </div>
                    {error && <p>{error}</p>}
                    <FormButton name="Reset Password" />
                </form>
            </div>
            {isChanged && (
                <div className="popupContainer">
                <ResetPasswordPopupPage isOpen={isChanged} />
                </div>
      )}
        </div>
    );
}

export default ResetPassword;