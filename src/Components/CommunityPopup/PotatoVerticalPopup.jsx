import React from "react";
import Popup from "../Popup/Popup";

const PotatoVerticalPopup = () => {
  return (
    <Popup
      text="Congratulations!"
      paragraph={
        <>
          You have successfully joined
          <span style={{ color: "#f29620" }}> Tuber</span> and
          <span style={{ color: "#257830" }}> Vertical Farming</span> Community
        </>
      }
    />
  );
}

export default PotatoVerticalPopup;