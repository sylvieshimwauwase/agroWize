import React, {useState} from "react";
import "./CoursesPopup.css";
import FormButton from "../FormButton";
import { products } from "../../Constants/Products";


const CoursesPopup = ({ text, titleText, selectedProduct }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [learningState, setLearningState] = useState(false);
  //    Array(products.length).fill(false)
  // );

  const handleClose = () => {
    setIsVisible(false);
  };
  const handleLearningClick = () => {
    setLearningState(true);
  };

 const getProductIndex = () => {
   return products.findIndex((product) => product.title === selectedProduct);
 };

 const productIndex = getProductIndex();

 const getCoursePageLink = () => {
   return `/${selectedProduct.replace(/\s+/g, "")}CoursePage`;
 };
  return isVisible ? (
    <div className="popup_container">
      <button
        className="cancelIcon"
        onClick={handleClose}
        aria-label="Close popup"
      >
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
          <a className="titletext">{titleText}</a>
          <span className="pryColor">
            {" "}
            Our online courses kick off next month.{" "}
          </span>
        </p>
        <p>Get ready for an immersive learning journey!</p>
      </div>
      <FormButton
        to={getCoursePageLink()}
        name={learningState ? "Continue Learning" : "Start Learning"}
        onClick={handleLearningClick}
      />
    </div>
  ) : null;
};

export default CoursesPopup;
