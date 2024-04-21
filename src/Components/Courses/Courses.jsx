import React, {useState} from 'react'
import "./Courses.css"
import { products } from '../../Constants/Products';
import FormButton from '../FormButton';
import SearchBar from '../Search/SearchBar';


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
      <div className="coursesHero">
      <SearchBar />
      <h3 className="heroTitle">COURSES</h3>
    </div>
      {products.map((item, index) => {
        return (
          <div className="productDetails" key={index}>
            <img className="images" src={item.image} alt="Image" />
            <div className="borderDetails">
              <h3>{item.title}</h3>
              <h6>Duration: 1 - 3 Months</h6>
              <h6>Certificate: Available Upon Completion</h6>
              <h5 className="primaryColor">Online</h5>
              <FormButton
                name={
                  learningStates[index] ? "Continue Learning" : "Start Learning"
                }
                onClick={() => handleLearningClick(index)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Courses