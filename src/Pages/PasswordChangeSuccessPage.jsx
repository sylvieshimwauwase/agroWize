import React from 'react';
import Popup from '../Components/Popup/Popup';
import SmallSizeFormButton from '../Components/SmallSizeFormButton/SmallSizeFormButton';


const PasswordChangeSuccessPage = () => {
    return (
      <Popup
            text="Congratulations!"
            paragraph="You have successfully changed your password."
             />
    );
}

export default PasswordChangeSuccessPage;