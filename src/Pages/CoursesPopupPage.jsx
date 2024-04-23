import React from 'react'
import CoursesPopup from '../Components/CoursesPopup/CoursesPopup';

const CoursesPopupPage = ({product, onClose}) => {
  if (!product){
    return null;
  }
  return (
    <div>
      <CoursesPopup
        text="Congratulations"
        titleText={product.title || "Default Title"}
      />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default CoursesPopupPage