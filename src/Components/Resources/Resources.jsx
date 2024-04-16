import React, {useState} from 'react'
import "./Resources.css"
import { products } from '../../Constants/Products';
import FormButton from '../FormButton';
import SearchBar from '../Search/SearchBar';


const Resources = () => {
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
      <section>
        <img className="resourcesImg" src="/Frame 1000007856.png" alt="Image" />
      </section>
      <div className="productDetails">
        <img className="images" src="/VerticalLearning.png" alt="Image" />
        <SearchBar/>
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

export default Resources