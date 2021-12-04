import React from "react";
import { Link } from "react-router-dom";
import '@styles/Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/*" >
            My orders
          </Link>
        </li>
        <li>
          <Link to="/*">My account</Link>
        </li>
        <li>
          <Link to="/login">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export { Menu };
