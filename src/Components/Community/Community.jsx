import React from "react";
import SearchBar from "../Search/SearchBar";
import FormButton from "../FormButton";
import {communityDetails} from "../../Constants/Products.js"
import "./community.css";

const Community = () => {
  return (
    <>
    <div className="communityHero">
      <SearchBar />
      <h3 className="heroTitle">COMMUNITY</h3>
    </div>
    {communityDetails.map((item) => {
        return (
          <div className="productDetails">
            <img className="images" src={item.image} alt="Image" />
            <div className="borderDetails">
              <h3>{item.title}</h3>
              <h6 className="primaryColor">{item.about}</h6>
              <h6>
                <span className="coloredText">Type:</span> {item.green}
              </h6>
              <FormButton name="Join Community" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Community;
