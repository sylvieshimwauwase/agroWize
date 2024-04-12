import React from 'react' 
import "./Popup.css"
import FormButton from '../FormButton';

const Popup = ({text}) => {
  return (
    <div className="popup_container">
      <div>
        <img className="cancelIcon" src="/cancelIcon.png" alt="cancel" />
      </div>
      <div>
        <img
          className="successIcon"
          src="/loginSuccessIcon.png"
          alt="success"
        />
      </div>
      <div>
        <h3 className="popUpText">{text}</h3>
        <FormButton name="User Profile" />
      </div>
    </div>
  );
}

export default Popup