import React from "react";
import { useNavigate } from "react-router-dom";
import Popup from '../Components/Popup/Popup';
import SmallSizeFormButton from "../Components/SmallSizeFormButton/SmallSizeFormButton";

const SignUpPopUpPage = () => {
      const navigate = useNavigate();

      const handleHomeClick = () => {
        navigate("/");
      };
  return (
    <div>
       <Popup  text="Congratulations!"
       paragraph="Your account has been created successfully."
       button={
       <div>
            <SmallSizeFormButton name="Home" onClick={handleHomeClick}/>
       </div>
       }
       />
    </div>
  );
}

export default SignUpPopUpPage;