import React from 'react' 
import "./PasswordChangePopup.css"
import BtnComponent from '../BtnComponent/BtnComponent';



const PasswordChangePopup = ({text}) => {
  return (
    <div className="password_popup_container">
      <div>
        <img className="password_cancelIcon" src="/cancelIcon.png" alt="cancel" />
      </div>
      <div>
        <h3 className="password_popUpText">{text}</h3>
      </div>
        <div className="btnContainer">
          <BtnComponent
            variant="primary"
            size="large"
            fullWidth={true}
            className="btn"
          >
            Yes
          </BtnComponent>
          <BtnComponent
            variant="secondary"
            size="large"
            fullWidth={true}
            className="btn"
          >
            No
          </BtnComponent>
        </div>
    </div>
  );
}

export default PasswordChangePopup