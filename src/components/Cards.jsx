import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import '../styles/PopularProducts.scss';

import Cat from '../assets/assets-products/headphones/cat-headphone.jpg';
import Huawei from '../assets/assets-products/tablets/matepad-pro.jpg';
import Apple from '../assets/assets-products/smart-watches/watch-series6.jpg';
import Motorola from '../assets/assets-products/headphones/motorola-headphones.jpg';

import addToCartImage from '../assets/icons/icons-general/cart-icon.svg';
const Cards = () => {
  return (
    <div className="popular-products__container">
      <div className="product-card">
        <img
          src={Cat}
          alt="Headphones cat"
          className="product-card__img"
        />
        <p className="product-card__name">Wireless cat headphones</p>
        <div className="product-card__price-buy">
          <p className="product-price">$280</p>
          <div className="product-buy">
            <img src={addToCartImage} alt="" />
          </div>
        </div>
      </div>

      <div className="product-card">
        <img
          src={Huawei}
          alt="Huawe "
          className="product-card__img"
        />
        <p className="product-card__name">Huawei MatePad Pro</p>
        <div className="product-card__price-buy">
          <p className="product-price">$11,500</p>
          <div className="product-buy">
            <img src={addToCartImage} alt="" />
          </div>
        </div>
      </div>

      <div className="product-card">
        <img
          src={Apple}
          alt="Apple"
          className="product-card__img"
        />
        <p className="product-card__name">Apple watch series 6</p>
        <div className="product-card__price-buy">
          <p className="product-price">$10,999</p>
          <div className="product-buy">
            <img src={addToCartImage} alt="" />
          </div>
        </div>
      </div>

      <div className="product-card">
        <img
          src={Motorola}
          alt="Headphones Motorola"
          className="product-card__img"
        />
        <p className="product-card__name">Motorola headphones</p>
        <div className="product-card__price-buy">
          <p className="product-price">$1,300</p>
          <div className="product-buy">
            <img src={addToCartImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cards };