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
    <div className="Course_popup_container">
      <button
        className="course_cancelIcon"
        onClick={handleClose}
        aria-label="Close popup"
      >
        <img src="/cancelIcon.png" alt="Close" />
      </button>
      <div>
        <img
          className="course_successIcon"
          src="/loginSuccessIcon.png"
          alt="success"
        />
      </div>
      <div className="course_popupdetails">
        <h2 className="popUpText">{text}</h2>
        <p className="">
          You are one step closer to mastering{" "}
          <span className="course_titletext">{titleText}</span>
          <span className="course_pryColor">
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
