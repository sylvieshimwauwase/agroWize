import React from 'react'
import "./Resources.css"
import { products } from '../../Constants/Products';
import FormButton from '../FormButton';


const Resources = () => {
  return (
    <>
      <section>
        <img className="resourcesImg" src="/Frame 1000007856.png" alt="Image" />
      </section>
      <div className="productDetails">
        <img className="images" src="/VerticalLearning.png" alt="Image" />
        <div className="searchBarContainer">
          <input
            className="searchBar"
            type="text"
            placeholder="What do you want to learn?"
          />
          <img className="searchIcon" src="/searchIcon.svg" alt="searchIcon"  />
        </div>
      </div>
      {products.map((item) => {
        return (
          <div className="productDetails">
            <img className="images" src={item.image} alt="Image" />
            <div className="borderDetails">
              <h3>{item.title}</h3>
              <h6>Duration: 1 - 3 Months</h6>
              <h6>Certificate: Available Upon Completion</h6>
              <h5 className="primaryColor">Online</h5>
              <FormButton name="Start Learning" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Resources