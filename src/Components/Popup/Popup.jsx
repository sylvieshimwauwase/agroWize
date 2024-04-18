import React from 'react' 
import "./Popup.css"
import FormButton from '../FormButton';

const Popup = ({text, paragraph, button}) => {
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
        <p className="popUpText2">{paragraph}</p>
        {button}
      </div>
    </div>
  );
}

export default Popup