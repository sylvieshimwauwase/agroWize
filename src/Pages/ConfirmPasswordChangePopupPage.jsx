import React from "react";
import { useState } from "react";
import '../Components/ConfirmPopup.css';
import PasswordChangeSuccessPage from "./PasswordChangeSuccessPage";

const ConfirmPasswordChangePopupPage = ({ isOpen, onConfirm, onCancel}) => {
    const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

    const handleConfirm = () => {
        setIsSuccessPopupOpen(true);
        onConfirm();
    };

    const handleSuccessPopupClose = () => {
        setIsSuccessPopupOpen(false);
    };

    const handleSuccessPopupConfirm = () => {
        setIsSuccessPopupOpen(false);
        onCancel();
    };

    const handleSuccessPopupCancel = () => {
        setIsSuccessPopupOpen(false);
        
    };

    return ( 
        <>
        {isOpen && (
            <div className="confirmPopup">
            <p className='confirmPopupText'>Are you sure you want to change your password?</p>
            <div className="confirmPopupButtonContainer">
                <button className='yesButton' onClick={handleConfirm}>Yes</button>
                <button className='noButton'onClick={onCancel}>No</button>
            </div>
      </div>
        )};
        <div className="popupContainer">
            <PasswordChangeSuccessPage
                onClose={handleSuccessPopupClose}
                onConfirm={handleSuccessPopupConfirm}
                onCancel={handleSuccessPopupCancel}
                isOpen={isSuccessPopupOpen}
            />
        </div>
        </>
    );
}

export default ConfirmPasswordChangePopupPage;