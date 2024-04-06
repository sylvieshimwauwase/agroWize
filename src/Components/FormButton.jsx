import React from "react";
import { Link } from "react-router-dom";
import "./FormButton.css";

const FormButton = ({ name, onClick, to }) => {
  if (to) {
      return (
          <Link className="formButton" to={to}>{name}</Link>
      );
  } else {
      return (
          <button className="formButton" onClick={onClick}>{name}</button>
      );
  }
}

export default FormButton;