import React from "react";
import { Link } from "react-router-dom";
import "./SmallSizeFormButton.css";

const SmallSizeFormButton = ({ name, onClick, to }) => {
  if (to) {
      return (
          <Link className="smallSizeFormButton" to={to}>{name}</Link>
      );
  } else {
      return (
          <button className="smallSizeFormButton" onClick={onClick}>{name}</button>
      );
  }
}

export default SmallSizeFormButton;