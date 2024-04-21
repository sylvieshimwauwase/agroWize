import React, { useState } from "react";
import axios from "axios";
import Keys from "../../Constants/Keys";
import './ContactUs.css';
import FormButton from "../FormButton";

const ContactUs = () => {
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            subject: ''
      });

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value
            });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  await axios.post(`${Keys.base_url}/contact`, formData);
                  console.log('Message sent successfully');
                  setFormData({
                        name: '',
                        email: '',
                        subject: ''
                  });
            } catch (error) {
                  console.error('Error sending message: ', error);
                  setFormData({
                        name: '',
                        email: '',
                        subject: ''
                  });
            }
      };
            return (
            <div>
                  <section className="contactUsSection">
                        <div className="contactUsTitle">
                              <h3>Contact Us</h3>
                        </div>
                        <div className="contactUsGrid">
                              <div className="imageArea">
                                    <img src="/ContactUsImage.png" alt="Contact Us" />
                              </div>
                              <div className="contactUsForm">
                                    <form onSubmit={handleSubmit}>
                                          <label className="contactUsLabel" 
                                          htmlFor="name">Full name</label>
                                          <input 
                                          className="contactUsInput"
                                          type="text" 
                                          name="name"
                                          value={formData.name}
                                          onChange={handleInputChange}
                                          placeholder="Enter your name" 
                                          />

                                          <label className="contactUsLabel" 
                                          htmlFor="email">Enter your email address</label>
                                          <input 
                                          className="contactUsInput"
                                          type="text" 
                                          name="email"
                                          value={formData.email}
                                          onChange={handleInputChange}
                                          placeholder="example@gmail.com" />

                                          <label  className="contactUsLabel"
                                          htmlFor="subject">Message</label>
                                          <textarea 
                                          className="contactUsTextArea"
                                          id="subject" 
                                          name="subject"
                                          value={formData.subject}
                                          onChange={handleInputChange}
                                          placeholder="Write your message">
                                          </textarea>
                                          <button type="submit" className="contactUsButton">Send Message</button>
                                    </form>
                              </div>
                        </div>
                  </section>
            </div>
      );
      };
export default ContactUs;