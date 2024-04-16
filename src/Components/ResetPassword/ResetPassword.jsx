import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Keys from "../../Constants/Keys";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";
import './ResetPassword.css';
import FormButton from "../FormButton";

const ResetPassword = () => {
    const [userpassword, setNewPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
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
        if (userpassword !== confirmpassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        setErrorMessage("");

        try {
            const response = await axios.post(`${Keys.base_url}/resetPassword`, { 
                userpassword, 
                confirmpassword 
            });
            console.log(response.data);


            setNewPassword("");
            setConfirmPassword("");

            navigate("/login");
          } catch (error) {
            console.error("Error logging in: ", error);
            /*setError("Invalid username or password");*/
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
                            value={userpassword}
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
                            value={confirmpassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                        <FontAwesomeIcon
                                icon={showPassword ? faLockOpen : faLock}
                                className="password-toggle"
                                onClick={togglePasswordVisibility}
                        />
                    </div>
                    <FormButton name="Reset Password" />
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;