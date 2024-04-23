import React, {useState} from 'react'
import "./Courses.css"
import { products } from '../../Constants/Products';
import FormButton from '../FormButton';
import CoursesHero from '../CoursesHero';
import CoursesPopupPage from '../../Pages/CoursesPopupPage';



const Courses = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openPopup = (product) => {
      setSelectedProduct(product);
      setIsPopupOpen(true);
    };

    const closePopup = () => {
      setIsPopupOpen(false);
        setSelectedProduct(null); 
    };

  return (
    <>
      <CoursesHero />
      {products.map((item, index, product) => {
        return (
          <div className="productDetails" key={index}>
            <img className="images" src={item.image} alt="Image" />
            <div className="borderDetails">
              <h3>{item.title}</h3>
              <h6>Duration: 1 - 3 Months</h6>
              <h6>Certificate: Available Upon Completion</h6>
              <h5 className="primaryColor">Online</h5>
              <FormButton
                onClick={() => openPopup(product)}
                name="Enroll Now"
              />
            </div>
          </div>
        );
      })}
      {isPopupOpen && (
        <CoursesPopupPage product={selectedProduct} onClose={closePopup} />
      )}
    </>
  );
}

export default Courses