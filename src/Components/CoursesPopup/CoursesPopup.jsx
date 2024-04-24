import React, {useState} from "react";
import "./CoursesPopup.css";

const CoursesPopup = ({ text, titleText }) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };


  return isVisible ? (
    <div className="popup_container">
     <button className="cancelIcon" onClick={handleClose} aria-label="Close popup">
  <img src="/cancelIcon.png" alt="Close" />
  </button>
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
          <span className="titletext">{titleText}</span>
          <span className="pryColor">
            {" "}
            Our online courses kick off next month.{" "}
          </span>
        </p>
        <p>Get ready for an immersive learning journey!</p>
      </div>
    </div>
  )
  : null;
}

export default CoursesPopup;

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
