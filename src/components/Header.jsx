import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaCartShopping } from "react-icons/fa6";
function Header() {
  return (
    <>
      <header>
        <div className="header-ul">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="pro">
              <li>Products</li>
            </Link>
          </ul>
        </div>
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header-sup">
          <Link to="login">
            <button>
              <FaCartShopping />
            </button>
          </Link>
          <Link to="support">
            <button>Contact Support</button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
