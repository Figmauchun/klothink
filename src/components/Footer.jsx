import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-email">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="email-box">
            <input type="email" name="" id="" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-faq">
          <ul>
            <h4>Home</h4>
            <li>Features</li>
            <li>Popular Products</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <h4>Menswear </h4>
            <li>Casual</li>
            <li>Formal</li>
            <li>Party</li>
            <li>Business</li>
          </ul>
          <ul>
            <h4>Womenswear</h4>
            <li>Casual</li>
            <li>Formal</li>
            <li>Party</li>
            <li>Business</li>
          </ul>
          <ul>
            <h4>Kidswear</h4>
            <li>Casual</li>
            <li>Formal</li>
            <li>Party</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
