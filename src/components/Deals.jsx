import React from "react";
import "../styles/Deals.scss";


import Deal from '../assets/assets-store/mockup-deal.png';
const Deals = () => {
  return (
    <div className="deals">
      <div className="deals__container">
      <img
        className="deals__img"
        src={Deal}
        alt="Huawei Matebook x pro"
      />
      <div className="deals__info">
        <h2 className="deals__info-title">Deal hot of the day</h2>
        <p className="deals__info-time">
          Ends in <span>0</span> d <span>: 16</span> h <span>: 53</span>
          <span>: 38</span> s
        </p>
        <p className="deals__info-product-name">
          Huawei MateBook X Pro 11th Gen Intel i7
        </p>
        <div className="deals__info-price">
          <p className="price-deal">$31,999</p>
          <p className="price-before">$44,999</p>
        </div>
        <button className="btn-primary btn-deals">See product</button>
      </div>
    </div>
    </div>
  );
};

export { Deals };
