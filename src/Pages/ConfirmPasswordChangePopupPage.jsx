import React from "react";
import '../Components/ConfirmPopup.css';

const ConfirmPasswordChangePopupPage = ({ isOpen, onConfirm, onCancel}) => {
    return ( isOpen &&
            <div className="confirmPopup">
            <p className='confirmPopupText'>Are you sure you want to change your password?</p>
            <div className="confirmPopupButtonContainer">
                <button className='yesButton' onClick={onConfirm}>Yes</button>
                <button className='noButton'onClick={onCancel}>No</button>
            </div>
      </div>
    );
}

export default ConfirmPasswordChangePopupPage;