import React from "react";
import Popup from "../Components/Popup/Popup";

const SubscribePopupPage = ({ isOpen }) => {
      return (
            isOpen && <Popup text="Congratulations!"
            paragraph="You have successfully subscribed to our newsletter." />
      );
      };
export default SubscribePopupPage;