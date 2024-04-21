import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Keys from "../../Constants/Keys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";
import './ResetPassword.css';
import FormButton from "../FormButton";

const ResetPassword = () => {
    const [password, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        setErrorMessage("");

        try {
            const response = await axios.put(`${Keys.base_url}/passwordReset`, { 
                password, 
                confirmPassword 
            });
            console.log(response.data);

            if (response.data.success) {
                setNewPassword("");
                setConfirmPassword("");
                navigate("/login"); // Navigate to login page
              } else {
                setErrorMessage(response.data.error || "Password reset failed"); // Set specific error message
              }

            navigate("/login");
          } catch (error) {
            console.error("Error logging in: ", error);
            /*setError("Invalid username or password");*/
            setErrorMessage("An error occurred. Please try again later.");
          } finally {
            setNewPassword("");
            setConfirmPassword("");
          }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="resetPasswordPage">
            <div className="resetPasswordForm">
                <form onSubmit={handleSubmit}>
                    <h2>Reset Password</h2>
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
                    {errorMessage && <p>{errorMessage}</p>}
                    <FormButton name="Reset Password" />
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;