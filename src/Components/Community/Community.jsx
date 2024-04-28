import React, { useState } from "react";
import SearchBar from "../Search/SearchBar";
import FormButton from "../FormButton";
import { Link } from "react-router-dom";
import { communityDetails } from "../../Constants/Products.js"
import "./community.css";

import TomatoVerticalPopup from "../PopupMessage/CommunityPopup/TomatoVerticalPopup.jsx";
import LettuceVerticalPopup from "../PopupMessage/CommunityPopup/LettuceVerticalPopup.jsx";
import GrainVerticalPopup from "../PopupMessage/CommunityPopup/GrainVerticalPopup.jsx";
import PotatoVerticalPopup from "../PopupMessage/CommunityPopup/PotatoVerticalPopup.jsx";
import TomatoHydroPopup from "../PopupMessage/CommunityPopup/TomatoHydroPopup.jsx";
import LettuceHydroPopup from "../PopupMessage/CommunityPopup/LettuceHydroPopup.jsx";
import GrainHydroPopup from "../PopupMessage/CommunityPopup/GrainHydroPopup.jsx";
import TuberHydroPopup from "../PopupMessage/CommunityPopup/TuberHydroPopup.jsx";
import Popup from "../PopupMessage/Popup/Popup.jsx";

const popupPageComponentMap = {
  TomatoVerticalPopup,
  LettuceVerticalPopup,
  GrainVerticalPopup,
  PotatoVerticalPopup,
  TomatoHydroPopup,
  LettuceHydroPopup,
  GrainHydroPopup,
  TuberHydroPopup,
};

const Community = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [paragraph, setParagraph] = useState(<></>);


  const handleCancelClick = () => {
    
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <Popup isVisible={isVisible}
        handleCancelClick={() => {

          handleCancelClick();
        }}
        text="Congratulations!"
        paragraph={
          paragraph
        }
      />
      <div className="communityHero">
        <SearchBar />
        <h3 className="heroTitle">COMMUNITY</h3>
      </div>
      {communityDetails.map((item, index) => {
        const PopupPageComponent = popupPageComponentMap[item.popupPage];
        return (
          <div key={index} className="productDetails">
            <img className="images" src={item.image} alt="Image" />
            <div className="borderDetails">
              <h3>{item.title}</h3>
              <h6 className="primaryColor">{item.about}</h6>
              <h6>
                <span className="coloredText">Type:</span> {item.green}
              </h6>
              <FormButton name="Join Community" onClick={() => {
                setParagraph(item.paragraph);
                handleCancelClick()}} />
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default Community;
