import React from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from '../PopupMessage/Popup/Popup'
import SmallSizeFormButton from '../../Components/SmallSizeFormButton/SmallSizeFormButton'


const UserProfileUpdateSuccessPopup = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

    return ( isOpen && 
      <Popup
            text="Congratulations!"
            paragraph="You have successfully Updated your Profile."
            button={
              <div>
                   <SmallSizeFormButton name="Login" onClick={handleClose}/>
              </div>
              }
      />
    );
}

export default UserProfileUpdateSuccessPopup;