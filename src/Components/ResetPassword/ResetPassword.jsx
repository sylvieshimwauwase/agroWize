import React, { useState } from "react";
import './ResetPassword.css';
import FormButton from "../FormButton";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="resetPasswordPage">
            <div className="resetPasswordForm">
                <form onSubmit={handleSubmit}>
                    <h2>Reset Password</h2>
                    <div className="resetPasswordInput">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            required
                        />
                    </div>
                    <div className="resetPasswordInput">
                        <label htmlFor="newPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                    </div>
                    <FormButton name="Reset Password" />
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;