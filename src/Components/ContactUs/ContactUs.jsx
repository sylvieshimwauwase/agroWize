import React from "react";
import './ContactUs.css';
import FormButton from "../FormButton";

const ContactUs = () => {
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
                                    <form >
                                          <label htmlFor="name">Full name</label>
                                          <input type="text" name="name" placeholder="Enter your name" />
                                          <label htmlFor="email">Enter your email address</label>
                                          <input type="text" name="email" placeholder="example@gmail.com" />
                                          <label htmlFor="subject">Message</label>
                                          <textarea id="subject" name="subject" placeholder="Write your message"></textarea>
                                          <FormButton name="Send Message"/>
                                    </form>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default ContactUs;