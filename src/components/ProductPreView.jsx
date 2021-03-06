import React from "react";

import '@styles/ProductPreView.scss';

import Close from '../assets/icons/icons-about/icon-before.svg';
import MeedBook from '../assets/assets-products/computers/matebook-d16.jpg';

const ProductPreView = () => {
  return (
    <aside class="product-detail">
      <div class="close-icon">
        <img src={Close} alt="" />
      </div>
      <img
        class="product-detail__img"
        src={MeedBook}
        alt="Huawei matebook D16"
      />
      <div class="product-detail__info">
        <p class="product-detail__info-name">Huawei Matebook D16</p>
        <p class="product-detail__info-desc">
          Let your creative vision roam free on the ultra-large 16 "2.5K
          FullView display and be amazed at the vast visual landscape before
          your eyes.
        </p>
        <div class="specifications">
          <p class="specifications__title">Specifications</p>
          <ul class="specifications__list">
            <li class="specifications__list-point">
              <span>16'' screen fullview display</span>
            </li>
            <li class="specifications__list-point">
              <span>7nm AMD Ryzen 4000 H-Series</span>
            </li>
            <li class="specifications__list-point">
              <span>Button with fingerprint sensor</span>
            </li>
            <li class="specifications__list-point">
              <span>Wi-Fi 6</span>
            </li>
          </ul>
        </div>
        <div class="product-detail__info-price">
          <div class="product-price">
            <p class="price">Price:</p>
            <p class="price__number">$ 21,999</p>
          </div>
          <button class="btn-primary btn-product-detail">Add to cart</button>
        </div>
      </div>
    </aside>
  );
};

export { ProductPreView};
