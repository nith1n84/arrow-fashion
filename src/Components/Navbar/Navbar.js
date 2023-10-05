import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className="link">
        <div className="logo">
          <i className="uil uil-arrow-down-right"></i> Arrow Fashion
        </div>
      </Link>
      {location.pathname === "/" && (
        <div className="cart-icon">
          <Link to="/cart" className="cart-icon">
            <i className="uil uil-shopping-cart"></i>
            <b className="quantity-indicator">{totalItems}</b>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
