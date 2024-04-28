import React from "react";
import { useNavigate } from "react-router-dom";
import Popup from '../PopupMessage/Popup/Popup'
import SmallSizeFormButton from "../../Components/SmallSizeFormButton/SmallSizeFormButton";

const SignUpPopUpPage = ( {isOpen} ) => {
      const navigate = useNavigate();

      const handleHomeClick = () => {
        navigate("/login");
      };
  return (
    <div>
       {isOpen && ( <Popup 
       text="Congratulations!"
       paragraph="Your account has been created successfully."
       button={
       <div>
            <SmallSizeFormButton name="Login" onClick={handleHomeClick}/>
       </div>
       }
       />
      )}
    </div>
  );
}

export default SignUpPopUpPage;