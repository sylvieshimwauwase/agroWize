import React, { useState } from "react";
import SearchBar from "../Search/SearchBar";
import FormButton from "../FormButton";
import { Link } from "react-router-dom";
import {communityDetails} from "../../Constants/Products.js"
import "./community.css";

import TomatoVerticalPopup from "../CommunityPopup/TomatoVerticalPopup.jsx";
import LettuceVerticalPopup from "../CommunityPopup/LettuceVerticalPopup.jsx";
import GrainVerticalPopup from "../CommunityPopup/GrainVerticalPopup.jsx";
import PotatoVerticalPopup from "../CommunityPopup/PotatoVerticalPopup.jsx";
import TomatoHydroPopup from "../CommunityPopup/TomatoHydroPopup.jsx";
import LettuceHydroPopup from "../CommunityPopup/LettuceHydroPopup.jsx";
import GrainHydroPopup from "../CommunityPopup/GrainHydroPopup.jsx";
import TuberHydroPopup from "../CommunityPopup/TuberHydroPopup.jsx";
import Popup from "../Popup/Popup.jsx";

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

  /*const [popupCommunity, setPopupCommunity] = useState(null);

  const openPopup = (popupPage) => {
    const PopupComponent = popupPageComponentMap[popupPage];
    setPopupCommunity(PopupComponent);
  };

  const closePopup = () => {
    setPopupCommunity(null);
  };*/


  return (
    <div>
     {/*<Popup
      text="Congratulations!"
      paragraph={
        <>
          You have successfully joined
          <span style={{ color: "#f29620" }}> Vegetable</span> and
          <span style={{ color: "#257830" }}> Vertical Farming</span> Community
        </>
      }
    />*/}
    <div className="communityHero">
      <SearchBar />
      <h3 className="heroTitle">COMMUNITY</h3>
    </div>
    {communityDetails.map((item) => {
      const PopupPageComponent = popupPageComponentMap[item.popupPage];
        return (
          <div className="productDetails">
            <img className="images" src={item.image} alt="Image" />
            <div className="borderDetails">
              <h3>{item.title}</h3>
              <h6 className="primaryColor">{item.about}</h6>
              <h6>
                <span className="coloredText">Type:</span> {item.green}
              </h6>
              <Link to={`/${item.popupPage}`}>
                <FormButton name="Join Community" />
        </Link>
              {/*<FormButton name="Join Community" onClick={() => openPopup(item.popupPage)} />*/}
            </div>
          </div>
        );
      })}
      {/*{popupCommunity && (
        <div className="popupContainer">
          <popupCommunity isOpen={popupCommunity} />
        </div>
        
      )}*/}
    </div>
  );
};

export default Community;
