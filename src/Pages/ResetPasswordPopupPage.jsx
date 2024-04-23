import React from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../Components/Popup/Popup";
import SmallSizeFormButton from "../Components/SmallSizeFormButton/SmallSizeFormButton";

const ResetPasswordPopupPage = ({ isOpen }) => {

      const navigate = useNavigate();

      const handleHomeClick = () => {
            navigate("/login");
            };

      return (
            isOpen && <Popup
            text="Password Reset Successful!"
            button={<SmallSizeFormButton name="Login" onClick={handleHomeClick}/>} />
);
};

export default ResetPasswordPopupPage;