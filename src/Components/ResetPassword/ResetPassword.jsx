import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";
import './ResetPassword.css';
import FormButton from "../FormButton";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        setErrorMessage("");

        setNewPassword("");
        setConfirmPassword("");
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
                            value={newPassword}
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
                    <a href="/userProfileUpdate" className="forgot-password">
                        profile Update
                    </a>
                    <FormButton name="Reset Password" />
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;