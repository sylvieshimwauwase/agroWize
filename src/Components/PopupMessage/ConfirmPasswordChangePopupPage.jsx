import React from "react";
import { useState } from "react";
import './ConfirmPopup.css';
import { useNavigate } from "react-router-dom"
import Popup from "./Popup/Popup";
import SmallSizeFormButton from "../SmallSizeFormButton/SmallSizeFormButton";
import PasswordChangeSuccessPage from "./PasswordChangeSuccessPage";

const ConfirmPasswordChangePopupPage = ({ isOpen, onConfirm, onCancel }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
    const navigate = useNavigate();

    const handleConfirm = () => {
        setIsSuccessPopupOpen(true);
        onConfirm();
    };

    const handleClose = () => {
        navigate('/login');
    };
    const handleCancelClick = (text) => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            {isOpen && (
                <div className="confirmPopup">
                    <p className='confirmPopupText'>Are you sure you want to change your password?</p>
                    <div className="confirmPopupButtonContainer">
                        <button className='yesButton' onClick={handleConfirm}>Yes</button>
                        <button className='noButton' onClick={onCancel}>No</button>
                    </div>
                </div>
            )};
            <Popup isVisible={isVisible}
                handleCancelClick={handleCancelClick}
                text="Congratulations!"
                paragraph="You have successfully changed your password."
                button={
                    <div>
                        <SmallSizeFormButton name="Login" onClick={handleClose} />
                    </div>
                }
            />
        </>
    );
}

export default ConfirmPasswordChangePopupPage;