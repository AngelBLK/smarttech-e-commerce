import React from "react";

import '@styles/ContactUs.scss';

import EmailContact from '../assets/icons/icons-general/email-icon-login.svg';
import MessageContact from '../assets/icons/icons-general/message-icon.svg';
import ProfileContact from '../assets/icons/icons-general/user-icon.svg';

const ContactUs = () => {
  return (
    <div class="contact_container">
      <div class="contact_txt">
        <div class="txt">
          <h1>Get in touch with us!</h1>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
          <div class="img"></div>
        </div>
      </div>
      <div class="contact_form">
        <div class="con_form">
          <h1>Contact us</h1>
          <div class="input_contact">
            <h4>Name</h4>
            <div class="input_Icon">
              <input type="text" placeholder="smarttech Innovation" />
              <img
                class="icon-contact"
                src={ProfileContact}
                alt="user icon"
              />
            </div>
          </div>
          <div class="input_contact">
            <h4>Email</h4>
            <div class="input_Icon">
              <input type="text" placeholder="smarttech@innovation.com" />
              <img
                class="icon-contact"
                src={EmailContact}
                alt="email icon"
              />
            </div>
          </div>
          <div class="input_contact">
            <h4>Message</h4>
            <div class="input_Icon">
              <textarea
                class="comment"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Lorem ipsum, dolor sit . . ."
              ></textarea>
              <img
                class="icon-contact"
                src={MessageContact}
                alt="email icon"
              />
            </div>
            <div class="button_message">
              <input type="submit" value="SEND MESSAGE" class="contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactUs };
