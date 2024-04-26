import React from "react";
import Popup from "../Popup/Popup";

const TomatoHydroPopup = () => {
  return (
    <Popup
      text="Congratulations!"
      paragraph={
        <>
          You have successfully joined
          <span style={{ color: "#f29620" }}> Vegetable</span> and
          <span style={{ color: "#257830" }}> Hydro Farming</span> Community
        </>
      }
    />
  );
}

export default TomatoHydroPopup;