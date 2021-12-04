import React from "react";

import '../styles/Footer.scss';

import Visa from '@assets/icons/icons-general/visa.png';
import PayPayl from '../assets/icons/icons-general/paypal.png';
import MasterCard from '../assets/icons/icons-general/masterCard.png';
import AmericanExpres from '../assets/icons/icons-general/american-express.png';
import Instagram from '../assets/icons/icons-general/instagram-icon.svg';
import Twitter from '../assets/icons/icons-general/twitter-icon.svg';
import FaceBook from '../assets/icons/icons-general/facebook-icon.svg';

import Location from '../assets/icons/icons-general/address-icon.svg';
import Mail from '../assets/icons/icons-general/email-icon.svg';
import Phone from '../assets/icons/icons-general/phone-icon.svg';
import Logo from '../assets/icons/icons-general/logo-black.png';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="media">
        <div className="smarttech">
          <img
            className="logo__footer"
            src={Logo}
            alt=""
          />

          <p className="smarttech__copy">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero
            labore tempore incidunt voluptas a animi vitae voluptatem itaque!
          </p>

          <div className="smarttech__pay">
            <img src={Visa} alt="" className="payment-methods" />
            <img src={PayPayl} alt="" className="payment-methods" />
            <img src={MasterCard} alt="" className="payment-methods" />
            <img
              src={AmericanExpres}
              alt=""
              className="payment-methods"
            />
          </div>
        </div>

        <div className="contact">
          <div className="us">
            <h4 className="us__title">Contact Us</h4>
            <div className="us__methods">
              <img src={Location} alt="Location icon" className="icon" />  
              <h4 className="method__title">
                125 Northwest Loop 410 Ste 201, San Antonio, EEUU
              </h4>
            </div>

            <div className="us__methods">
            <img src={Mail} alt="Mail" className="icon" />
              <h4 className="method__title">smarttech.innovation@test.com</h4>
            </div>

            <div className="us__methods">
            <img src={Phone} alt="Phone icon" className="icon" />
              <h4 className="method__title">56 2349 1273</h4>
            </div>
          </div>

          <div className="social">
            <h4 className="social__title">Social Media</h4>
            <div className="social-media">
              <img src={FaceBook} alt="" className="facebook" />
              <img src={Instagram}alt="" className="instagram"/>
              <img src={Twitter} alt="" className="twitter"/>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyrigth">
        <p className="copyrigth__p">Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export { Footer };
