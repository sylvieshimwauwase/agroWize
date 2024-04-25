import React, { useState } from "react";
import axios from "axios";
import Keys from "../../Constants/Keys";
import './Footer.css';
import { Link } from "react-router-dom";
import SubscribePopupPage from "../../Pages/SubscribePopupPage";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${Keys.base_url}/subscribe`, { email });
            console.log('Subscription successful:', response.data);
            setShowPopup(true);
            setEmail('');

        } catch (error) {
            console.error('Error subscribing: ', error);
            setEmail('');
        }
    };

    return (
      <div className="footer">
        <div className="footerSection1">
          <div className="footerContainer1">
            <div className="logoSection">
              <img src="/AgroWizeLogo.png" alt="Logo"></img>
              <p>Revolutionizing Agriculture</p>
            </div>
            <div className="size">
              <h2>Links</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/aboutUs">About Us</Link>
                </li>
                <li>
                  <Link to="/userProfileUpdate">User Profile</Link>
                </li>
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
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/blogs"></Link>Blogs/News
                </li>
                <li>
                  <Link to="/communities">Communities</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2>Legal</h2>
              <ul>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerContainer2">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <img src="/Vector (1).png" alt="Mail" />
                agrowize.info@gmail.com
              </li>
              <li>
                <img src="/bxs_phone.png" alt="Phone" />
                +12367890587
              </li>
              <li>
                <img src="/zondicons_location.png" alt="Location" />5 Victoria
                Island, Lagos State, Nigeria.
              </li>
            </ul>
          </div>
          <hr className="horizontalLine" />
          <div className="footerContainer3">
            <div className="copyright">
              <p>
                <img src="/bi_c-circle-fill.png" alt="Logo" />
                2024 AgroWize. All Rights Reserved
              </p>
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
          <p>
            Stay connected with information about our Agricultural Practices and
            Update
          </p>
          <div className="input-box">
            <form onSubmit={handleSubscribe}>
              <input
                className="newsletter-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>
        <SubscribePopupPage isOpen={showPopup} />
      </div>
    );
}

export default Footer;