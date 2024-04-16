import React from "react";
import "./ResourcePopup.css";

const ResourcePopup = ({ text, titleText }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };


  return isVisible ? (
    <div className="popup_container">
      <div>
        <img className="cancelIcon" src="/cancelIcon.png" alt="cancel" onClick={handleClose} />
      </div>
      <div>
        <img
          className="successIcon"
          src="/loginSuccessIcon.png"
          alt="success"
        />
      </div>
      <div className="popupdetails">
        <h2 className="popUpText">{text}</h2>
        <p className="">
          You are one step closer to mastering{" "}
          <a className="titletext">{titleText}</a>
          <span className="pryColor">
            {" "}
            Our online courses kick off next month.{" "}
          </span>
        </p>
        <p>Get ready for an immersive learning journey!</p>
      </div>
    </div>
  );
};

export default ResourcePopup;

// <div className="popup_container">
//   <div>
//     <img className="cancelIcon" src="/cancelIcon.png" alt="cancel" />
//   </div>
//   <div>
//     <img
//       className="successIcon"
//       src="/loginSuccessIcon.png"
//       alt="success"
//     />
//   </div>
//   <div>
//     <h3 className="popUpText">{text}</h3>
//     <FormButton name="User Profile" />
//   </div>
// </div>
