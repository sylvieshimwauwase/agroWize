import React from "react";
import Popup from "../Popup/Popup";

const TuberHydroPopup = ({ isopen }) => {
  return ( isopen &&
    <Popup
      text="Congratulations!"
      paragraph={
        <>
          You have successfully joined
          <span style={{ color: "#f29620" }}> Tuber</span> and
          <span style={{ color: "#257830" }}> Hydro Farming</span> Community
        </>
      }
    />
  );
}

export default TuberHydroPopup;