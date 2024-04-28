import React from "react";
import Popup from "./Popup/Popup";

const ContactusMessagePopup = ({ isOpen }) => {
  return isOpen && <Popup 
  text="Congratulations!"
  paragraph="Message Sent Successfully." />;
}

export default ContactusMessagePopup;