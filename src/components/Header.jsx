import React, { useContext, useState } from "react";
import "@styles/Header.scss";
import { Menu } from "./Menu";
import { AppContext } from '../context/AppContext';
import { MyOrder } from '../containers/MyOrder';

import Logo from "@assets/icons/icons-general/logo-white.png";
import MenuIcon from "@assets/icons/icons-general/menu-icon.svg";
import ShoppingCart from "@assets/icons/icons-general/cart-icon.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={MenuIcon} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={Logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <Link to="/all-products">All</Link>
          </li>
          <li>
            <Link to="/">Smarttech Innovation</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li 
            className="navbar-email"
            onClick={handleToggle}
          >
            dante@example.com
          </li>
          <li 
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          
          >
            <img src={ShoppingCart} alt="shopping cart" />

            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
        {toggle ? <Menu /> : null}
        {toggleOrders ? <MyOrder /> : null}
      </div>
    </nav>
  );
};

export { Header };
