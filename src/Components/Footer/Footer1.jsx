import React from "react";
import "./Footer.css";
import FormButton from "../FormButton";
import Header from "../Header/Header";

const Footer1 = () => {
    return (
        <div className="footer">
            <div className="footerSection1">
                <div className="footerLogo">
                    <img src="/agrowize_logo.png" alt="logo" />
                </div>
                <div className="footerText">
                    <p className="footerText1">AgroWize is a platform that connects farmers to buyers and provides them with the best prices for their produce.</p>
                    <p className="footerText2">© 2021 AgroWize. All Rights Reserved</p>
                </div>
                <div className="footerSection2">
                    <div className="footerSection2ContentWrapper">
                        <div className="footerSection2Content">
                            <div className="footerTextParagraphs">
                            <p className="footerTitle">Subscribe to our newsletters</p>
                            <p className="footerSubtitle">Stay connected with information about our Agricultural Practices and Update.</p>
                            </div>
                            <div className="subscribeLbl">
                                <input type="email" name="email" className="footerInput" placeholder="Enter your email address"></input>
                                <FormButton name="Subscribe" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Header />
        </div>
    );
};

export default Footer1;