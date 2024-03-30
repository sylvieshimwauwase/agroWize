import React from "react";
import "./FormNavbar.css";

const FormNavbar = ({ title }) => {
  return (
    <nav className="formNavbar">
        <div>
          <img className="formNavbarLogo" src="/AgroWizeLogo.png" alt="Logo" />
        </div>
        <div>
          <h3 className="formNavbar_CA" href="/">
            {title}
          </h3>
        </div>
        <div>
          <a className="formNavbarHome" href="/">
            HOME
          </a>
        </div>
    </nav>
  );
};

export default FormNavbar;
