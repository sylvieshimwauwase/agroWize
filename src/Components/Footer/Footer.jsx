import React from "react";
import './Footer.css';
import FormButton from "../FormButton";

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footerSection1">
                <div className='footerContainer1'>

                    <div className="logoSection">
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
                        <li><img src="/Vector (1).png" alt="Mail" />agrowize.info@gmail.com</li>
                        <li><img src="/bxs_phone.png" alt="Phone" />+12367890587</li>
                        <li><img src="/zondicons_location.png" alt="Location" />5 Victoria Island, Lagos State, Nigeria.</li>
                    </ul>
                </div>
                <hr className="horizontalLine"/>
                <div className="footerContainer3">
                    <div className="copyright">
                        <p><img src="/bi_c-circle-fill.png" alt="Logo" />2024 AgroWize. All Rights Reserved</p>
                    </div>
                    <div className="social">
                        <img src="/ic_outline-facebook.png" alt="facebook" />
                        <img src="/pajamas_twitter.png" alt="google" />
                        <img src="/ri_instagram-line.png" alt="vector" />
                        <img src="/ic_outline-tiktok.png" alt="facebook" />
                        <img src="/flowbite_youtube-solid.png" alt="google" />
                        <img src="/bi_linkedin.png" alt="vector" />
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