import React from 'react'
import { useNavigate } from 'react-router-dom';
import SmallSizeFormButton from '../../Components/SmallSizeFormButton/SmallSizeFormButton'
import Popup from '../PopupMessage/Popup/Popup'

const LoginPopUpPage = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/userProfileUpdate");
  };
  return (
    isOpen && <Popup
    text="Login Successful!"
    button={<SmallSizeFormButton name="User Profile" onClick={handleHomeClick}/>} />
);
};

export default LoginPopUpPage;