import React from 'react'
import { useNavigate } from 'react-router-dom';
import SmallSizeFormButton from '../Components/SmallSizeFormButton/SmallSizeFormButton'
import Popup from '../Components/Popup/Popup'

const LoginPopUpPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/userProfileUpdate");
  };
  return (
    <Popup  text="Login Successful!"
    button={
      <div>
           <SmallSizeFormButton name="User Profile" onClick={handleHomeClick}/>
      </div>
      }
      />
  )
}

export default LoginPopUpPage;