import React, { useEffect, useState } from "react";
import SearchBar from "../Search/SearchBar";
import FormButton from "../FormButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Keys from "../../Constants/Keys.js";
import { communityDetails } from "../../Constants/Products.js"
import "./community.css";
import Popup from "../PopupMessage/Popup/Popup.jsx";

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
          <>
            You have successfully joined
            <span style={{ color: "#f29620" }}> Lettuce</span>
            <span style={{ color: "#257830" }}> Hydro Farming</span> Community
          </>
        }
      />
      <div className="communityHero">
        <SearchBar />
        <h3 className="heroTitle">COMMUNITY</h3>
      </div>
      {communitiesList.map((item, index) => {

        return (
          <div key={index} className="productDetails">
            <img className="images" src={`/AboutUs3.png`} alt="" />
            <div className="borderDetails">
              <h3>{item.name}</h3>
              <h6 className="primaryColor">{`Vegetable`}</h6>
              <h6>
                <span className="coloredText">Type:</span> {`Tomato`}
              </h6>
              <FormButton name="Join Community" onClick={() => {
                setParagraph(item.paragraph);
                handleCommunityClick(item.id);
                
              }} />
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default Community;
