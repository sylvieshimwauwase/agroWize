import React from "react";
import Popup from "../Popup/Popup";

const GrainVerticalPopup = () => {
  return (
    <Popup
      text="Congratulations!"
      paragraph={
        <>
          You have successfully joined
          <span style={{ color: "#f29620" }}> Grain</span> and
          <span style={{ color: "#257830" }}> Vertical Farming</span> Community
        </>
      }
    />
  );
}

export default GrainVerticalPopup;