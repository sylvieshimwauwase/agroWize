import React from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from '../Components/Popup/Popup';
import SmallSizeFormButton from '../Components/SmallSizeFormButton/SmallSizeFormButton';


const PasswordChangeSuccessPage = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

    return ( isOpen && 
      <Popup
            text="Congratulations!"
            paragraph="You have successfully changed your password."
            button={
              <div>
                   <SmallSizeFormButton name="Login" onClick={handleClose}/>
              </div>
              }
      />
    );
}

export default PasswordChangeSuccessPage;