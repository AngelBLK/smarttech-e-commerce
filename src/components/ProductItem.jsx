import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import "@styles/ProductItem.scss";
import ShoppingCart from '../assets/icons/icons-general/cart-icon.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}
  return (
    <div className="ProductItem">
      <img src={product.images[1]} alt={product.title} className="ProductItem-img"/>
      <div className="product-info">
        <div>
          <p>$ {product.price}.00</p>
          <p>{product.title}</p>
        </div>
        <div onClick={() => handleClick(product)} className="other-cartContainer">
          <img src={ShoppingCart} alt="" className="other-cart" />
        </div>
      </div>
    </div>
  );
};

export { ProductItem };
