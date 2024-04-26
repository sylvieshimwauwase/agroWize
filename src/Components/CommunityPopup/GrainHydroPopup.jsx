import React from "react";
import Popup from "../Popup/Popup";

const GrainHydroPopup = () => {
  return (
    <Popup
      text="Congratulations!"
      paragraph={
        <>
          You have successfully joined
          <span style={{ color: "#f29620" }}> Grain</span> and
          <span style={{ color: "#257830" }}> Hydro Farming</span> Community
        </>
      }
    />
  );
}

export default GrainHydroPopup;