import React, {useState} from 'react'
import "./Courses.css"
import { products } from '../../Constants/Products';
import CoursesHero from '../CoursesHero';
import { Link} from "react-router-dom"
import SmallSizeFormButton from '../SmallSizeFormButton/SmallSizeFormButton';


const Courses = () => {
    const [learningStates, setLearningStates] = useState(
      Array(products.length).fill(false)
    );

    const handleLearningClick = (index) => {
      const newLearningStates = [...learningStates];
      newLearningStates[index] = true;
      setLearningStates(newLearningStates);

    };

  return (
    <>
      <CoursesHero/>
      {products.map((item, index) => {
        return (
          <div className="productDetails" key={index}>
            <img className="images" src={item.image} alt="Image" />
            <div className="borderDetails">
              <h3>{item.title}</h3>
              <h6>Duration: 1 - 3 Months</h6>
              <h6>Certificate: Available Upon Completion</h6>
              <h5 className="primaryColor">Online</h5>
               <Link to={`/${item.title.replace(/\s+/g, '')}CoursePage`}>
              <SmallSizeFormButton
                name={
                  learningStates[index] ? "Continue Learning" : "Enroll Now"
                }
                onClick={() => handleLearningClick(index)}
              />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Courses