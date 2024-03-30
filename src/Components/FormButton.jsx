import React from "react";
import "./FormButton.css";

const FormButton = ({ name }) => {
  return (
    <button className="formButton">{name}</button>
  );
}

export default FormButton;