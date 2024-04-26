import React from "react";
import Popup from "../Popup/Popup";

const TomatoVerticalPopup = () => {
  return (
    <Popup
      text="Congratulations!"
      paragraph={
        <>
          You have successfully joined
          <span style={{ color: "#f29620" }}> Vegetable</span> and
          <span style={{ color: "#257830" }}> Vertical Farming</span> Community
        </>
      }
    />
  );
}

export default TomatoVerticalPopup;