import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
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
          <svg
            width="52.000000"
            height="52.000000"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip137_1393">
                <rect
                  id="Icon"
                  rx="0.000000"
                  width="23.000000"
                  height="23.000000"
                  transform="translate(14.500000 14.500000)"
                  fill="white"
                  fill-opacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="Button"
              rx="25.500000"
              width="51.000000"
              height="51.000000"
              transform="translate(0.500000 0.500000)"
              fill="#FFD400"
              fill-opacity="1.000000"
            />
            <g clip-path="url(#clip137_1393)">
              <path
                id="Union"
                d="M16.25 16.25C15.83 16.25 15.5 16.58 15.5 17C15.5 17.41 15.83 17.75 16.25 17.75L17.63 17.75C17.8 17.75 17.95 17.86 17.99 18.02L20.55 27.61C18.94 28.03 17.75 29.5 17.75 31.25C17.75 31.66 18.08 32 18.5 32L34.25 32C34.66 32 35 31.66 35 31.25C35 30.83 34.66 30.5 34.25 30.5L19.37 30.5C19.68 29.62 20.52 29 21.5 29L32.71 29C33 29 33.26 28.83 33.39 28.57C34.52 26.24 35.51 23.83 36.35 21.35C36.41 21.15 36.4 20.93 36.3 20.75C36.2 20.57 36.02 20.43 35.82 20.38C31 19.15 25.95 18.5 20.75 18.5C20.39 18.5 20.03 18.5 19.67 18.5L19.44 17.64C19.22 16.82 18.48 16.25 17.63 16.25L16.25 16.25ZM17.75 34.25C17.75 33.42 18.42 32.75 19.25 32.75C20.07 32.75 20.75 33.42 20.75 34.25C20.75 35.07 20.07 35.75 19.25 35.75C18.42 35.75 17.75 35.07 17.75 34.25ZM32 32.75C31.17 32.75 30.5 33.42 30.5 34.25C30.5 35.07 31.17 35.75 32 35.75C32.82 35.75 33.5 35.07 33.5 34.25C33.5 33.42 32.82 32.75 32 32.75Z"
                fill="#262626"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </g>
          </svg>
          <Link to="support">
            <button>Contact Support</button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
