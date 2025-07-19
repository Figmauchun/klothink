import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "../images/io.png";
import it from "../images/it.png";
import ith from "../images/ith.png";
import { FaPlus } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

function Details() {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  useEffect(() => {
    fetch(`http://localhost:2008/clothes/${id}`)
      .then((res) => res.json())
      .then((json) => setDetail(json));
  }, []);
  return (
    <>
      <div className="details-box">
        {detail && (
          <div className="details">
            <div className="details-top">
              <img src={detail.img} alt="" />
            </div>
            <div className="details-bottom">
              <div className="about-box">
                <div className="about-text-box">
                  <span>{detail.category}</span>
                  <h4>{detail.name}</h4>
                  <h3>${detail.price}</h3>
                </div>
                <div className="about-btn-box">
                  <button>
                    <RiShoppingBag4Fill />
                    Buy Now
                  </button>
                  <button>
                    <FaShoppingCart />
                    Add To cart
                  </button>
                </div>
              </div>
              <div className="info-box">
                <div className="Material">
                  <h4>Material</h4>
                  <p>{detail.Material}</p>
                </div>
                <div className="Fit">
                  <h4>Fit</h4>
                  <p>{detail.fit}</p>
                </div>
                <div className="Color">
                  <h4>Color</h4>
                  <div className="color-input">
                    <input type="color" name="" id="" />
                    <input type="color" name="" id="" />
                    <input type="color" name="" id="" />
                  </div>
                </div>
                <div className="Size">
                  <h4>Sizes</h4>
                  <div className="size-btn">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="Reviews">
        <div className="reviews-text-box">
          <div className="revhbox">
            <h1>Reviews</h1>
            <p>
              At Klothink, our customers are the heartbeat of our brand. Explore
              the heartfelt testimonials shared by those who have experienced
              the magic of Klothink fashion.
            </p>
          </div>
        </div>
        <div className="reviews-card-box">
          <div className="revcard">
            <div className="comib">
              <img src={io} alt="" />
              <div className="comib-h">
                <h5>Alex M</h5>
                <div className="rev-i-box">
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <p>
              Absolutely love this denim jacket! The fit is perfect, and the
              distressed detailing gives it a rugged yet stylish look. It's
              become my go-to piece for casual outings. Highly recommend!
            </p>
          </div>
          <div className="revcard">
            <div className="comib">
              <img src={ith} alt="" />
              <div className="comib-h">
                <h5>Emily S</h5>
                <div className="rev-i-box">
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <p>
              Great quality and versatile styling options. The buttons are
              sturdy, and the jacket feels well-made. I deducted one star
              because I wish it had an inside pocket, but overall.
            </p>
          </div>
          <div className="revcard">
            <div className="comib">
              <img src={it} alt="" />
              <div className="comib-h">
                <h5>Chris B</h5>
                <div className="rev-i-box">
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.502930"
                    height="16.743652"
                    viewBox="0 0 17.5029 16.7437"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Shape"
                      d="M7.91 0.45L5.55 4.12C5.41 4.34 5.2 4.49 4.96 4.55L0.74 5.66C0.04 5.84 -0.24 6.7 0.22 7.26L2.98 10.64C3.14 10.83 3.22 11.08 3.21 11.33L2.96 15.68C2.92 16.41 3.64 16.93 4.32 16.67L8.38 15.09C8.62 15 8.88 15 9.11 15.09L13.17 16.67C13.85 16.93 14.58 16.41 14.54 15.68L14.29 11.33C14.27 11.08 14.35 10.83 14.51 10.64L17.27 7.26C17.73 6.7 17.46 5.84 16.75 5.66L12.53 4.55C12.29 4.49 12.08 4.34 11.95 4.12L9.59 0.45C9.19 -0.16 8.3 -0.16 7.91 0.45Z"
                      fill="#FFCE22"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <p>
              Urban Explorer exceeded my expectations. The denim is of excellent
              quality, and the fit is just right. It's become my favorite jacket
              for weekend adventures.
            </p>
          </div>
        </div>
      </div>
      <div className="Freque">
        <h1>Frequently asked questions</h1>
        <p className="fre-p">
          Ease into the world of Klothink with clarity. Our FAQs cover a
          spectrum of topics, ensuring you have the information you need for a
          seamless shopping experience.
        </p>
        <div className="que-accordion">
          <div className="accs">
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Does the jacket come in different colors?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Are there any inside pockets in the jacket?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Can I machine wash the denim jacket?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How do I style the jacket for different occasions?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
          </div>
          <div className="accs">
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>
                  What is the material of the Urban Explorer Denim Jacket?
                </h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How do I determine the right size for me?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Can I machine wash the denim jacket?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Does the jacket come in different colors?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
          </div>
          <div className="accs">
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>
                  Is the distressed detailing on the jacket prone to fraying?
                </h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Does the jacket come in different colors?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Can I machine wash the denim jacket?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How do I style the jacket for different occasions?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                The jacket is crafted from high-quality denim, composed of 100%
                cotton for a comfortable and durable wear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
