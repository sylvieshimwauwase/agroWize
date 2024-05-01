import React, { useEffect, useState } from "react";
import SearchBar from "../Search/SearchBar";
import FormButton from "../FormButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Keys from "../../Constants/Keys.js";
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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const Navigate = useNavigate();

  const handleCancelClick = () => {

    setIsVisible(!isVisible);
  }


  const [communityId, setCommunityId] = useState("");
  const handleCommunityClick = async (id) => {
    setCommunityId(id);
    try {
      const response = await axios.post(`${Keys.base_url}/joinCommunity`, {
        communityId: communityId,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      console.log(response.data);
      setIsUserLoggedIn(true);
    } catch (error) {
      console.error("Error joining community:", error);
    }
    setIsVisible(!isVisible);
  }
  const [communitiesList, setCommunitiesList] = useState([]);
  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const response = await axios.get(`${Keys.base_url}/fetchCommunities`,
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("auth_token")}`,
            },
          });
        console.log(localStorage.getItem("auth_token"))

        setCommunitiesList(response.data.message);
      } catch (error) {
        console.error("Error fetching community:", error);
      }
    }
    fetchCommunity();
  }
    , []);



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
            <img className="images" src={item.image} alt="" />
            <div className="borderDetails">
              <h3>{item.title}</h3>
              <h6 className="primaryColor">{item.about}</h6>
              <h6>
                <span className="coloredText">Type:</span> {item.green}
              </h6>
              <FormButton name="Join Community" onClick={() => {
                setParagraph(item.paragraph);
                handleCommunityClick(item.id);
                //   if (isUserLoggedIn) {
                //     setParagraph(item.paragraph);
                //     handleCancelClick()
                // } else {
                //   Navigate("/login")
                // }
              }} />
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default Community;
