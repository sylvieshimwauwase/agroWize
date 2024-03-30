import React from "react";
import './Footer.css';
import FormButton from "../FormButton";

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footerSection1">
                <div className='footerContainer1'>

                    <div>
                        <img src="/AgroWizeLogo.png" alt="Logo"></img>
                        <p>Revolutionizing Agriculture</p>
                    </div>
                    <div>
                        <h2>Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>User Profile</li>
                        </ul>
                    </div>


                    <div>
                        <h2>Support</h2>
                        <ul>
                            <li>FAQs</li>
                            <li>Settings</li>
                            <li>Help Centre</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Explore More</h2>
                        <ul>
                            <li>Courses</li>
                            <li>Blogs/News</li>
                            <li>Resources</li>
                            <li>Communities</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Legal</h2>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                </div>
                <div className="footerContainer2">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>agrowize.info@gmail.com</li>
                        <li>+12367890587</li>
                        <li>5 Victoria Island, Lagos State, Nigeria.</li>
                    </ul>
                </div>
                <hr className="horizontalLine"/>
                <div className="footerContainer3">
                    <div>
                        <p>2024 AgroWize. All Rights Reserved</p>
                    </div>
                    <div>
                        <img src="/facebook_ic.png" alt="facebook" />
                        <img src="/google_ic.png" alt="google" />
                        <img src="/Vector.png" alt="vector" />
                    </div>
                </div>

            </div>

            <div className="footerSection2">
                <h2>Subscribe to our newsletter</h2>
                <p>Stay connected with information about our Agricultural Practices and Update</p>
                <div className='input-box'>
                    <input className='newsletter-input' placeholder='Enter your email address'></input>
                    <FormButton name="Subscribe"/>
                </div>

            </div>
        </div>
    );
}

export default Footer;