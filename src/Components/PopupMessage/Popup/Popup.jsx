import React, { useState } from 'react'
import "./Popup.css"
import FormButton from '../../../Components/FormButton';

const Popup = ({ text, paragraph, button, isVisible, handleCancelClick }) => {
  // const [isVisible, setIsVisible] = useState(true);

  // const handleCancelClick = () => {
  //   setIsVisible(false);
  // }

  return (
    <div className='popupPositioning'>
      {isVisible && (
        <>
          <div className='backgroundHolder'></div>

          <div className="popup_container" >
            <div>
              <img className="cancelIcon"
                src="/cancelIcon.png"
                alt="cancel"
                onClick={handleCancelClick}
              />
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
        </>

      )}
    </div>
  );
}

export default Popup