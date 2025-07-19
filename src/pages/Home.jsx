import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homei from "../images/homei.svg";
import ione from "../images/ione.png";
import io from "../images/io.png";
import it from "../images/it.png";
import ith from "../images/ith.png";
import { FaPlus } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  useEffect(() => {
    fetch("http://localhost:2008/clothes")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);
  const Qidruv = data.filter((e) => {
    const inputsearch = e.name.toLowerCase().includes(search.toLowerCase());
    const btnsearch = category === "all" || e.category === category;
    return inputsearch && btnsearch;
  });
  return (
    <>
      <div className="about">
        <div className="abt">
          <div className="style">
            <h1>Elevate Your Style with Klothink</h1>
            <p>Style Redefined.</p>
          </div>
          <div className="ap">
            <p>
              Explore a world of fashion at Klothink, where trends meet
              affordability. Immerse yourself in the latest styles and seize
              exclusive promotions.
            </p>
          </div>
          <div className="about-btn-box">
            <button className="btni">
              <RiShoppingBag4Fill />
              Shop Now
            </button>
            <button className="btnt">Contact Us</button>
          </div>
          <div className="stata-box">
            <div className="stata-card">
              <h3>Over 1000+</h3>
              <p>Trendsetting Styles</p>
            </div>
            <div className="stata-card">
              <h3>99%</h3>
              <p>Customer Satisfaction Rate</p>
            </div>
            <div className="stata-card">
              <h3>24/7</h3>
              <p>Shopping Convenience</p>
            </div>
            <div className="stata-card">
              <h3>30-Day</h3>
              <p>Hassle-Free Returns</p>
            </div>
          </div>
        </div>
        <div className="abi">
          <img src={homei} alt="fashion model" />
        </div>
      </div>
      <div className="cards-text-box">
        <div className="hbox">
          <h1>Discover Fashion</h1>
          <p>
            Dive into a world of fashion innovation at Klothink. Our carefully
            curated collections bring together the latest trends and timeless
            classics, ensuring you find the perfect pieces for every occasion.
          </p>
        </div>
        <div className="btn-box">
          <button>View All Products</button>
        </div>
      </div>
      <div className="filter-box">
        <div className="fil-category">
          <button onClick={() => setCategory("all")}>All</button>
          <button onClick={() => setCategory("menswear")}>Menswear</button>
          <button onClick={() => setCategory("womenswear")}>Womenswear</button>
          <button onClick={() => setCategory("kidswear")}>Kidswear</button>
        </div>
        <div className="fil-btn">
          <button>Casual</button>
          <button>Formal</button>
          <button>Party</button>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <div className="cards">
          {Qidruv &&
            Qidruv.map((e) => {
              return (
                <SwiperSlide>
                  <Link to={`/clothes/${e.id}`}>
                    <div className="card">
                      <div className="card-img-box">
                        <img src={e.img} alt="" />
                      </div>
                      <h4>{e.name}</h4>
                      <span>${e.price}</span>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
        </div>
      </Swiper>
      <div className="experience">
        <div className="ex-text-box">
          <h1>The Klothink Experience.</h1>
          <p>
            At Klothink, we breathe life into fashion, blending creativity with
            commitment. Our journey is fueled by a dedication to delivering
            unparalleled style and quality. Join us in redefining fashion and
            embracing a community where every purchase tells a story.
          </p>
        </div>
        <div className="ex-card-box">
          <div className="ecard">
            <div className="ecard-img-box">
              <img src={ione} alt="" />
              <h4>Passionate Craftsmanship</h4>
            </div>
            <p>
              Every garment at Klothink is crafted with passion, reflecting our
              commitment to quality and innovation.
            </p>
          </div>
          <div className="ecard">
            <div className="ecard-img-box">
              <img src={ione} alt="" />
              <h4>Passionate Craftsmanship</h4>
            </div>
            <p>
              Every garment at Klothink is crafted with passion, reflecting our
              commitment to quality and innovation.
            </p>
          </div>
          <div className="ecard">
            <div className="ecard-img-box">
              <img src={ione} alt="" />
              <h4>Passionate Craftsmanship</h4>
            </div>
            <p>
              Every garment at Klothink is crafted with passion, reflecting our
              commitment to quality and innovation.
            </p>
          </div>
          <div className="ecard">
            <div className="ecard-img-box">
              <img src={ione} alt="" />
              <h4>Passionate Craftsmanship</h4>
            </div>
            <p>
              Every garment at Klothink is crafted with passion, reflecting our
              commitment to quality and innovation.
            </p>
          </div>
          <div className="ecard">
            <div className="ecard-img-box">
              <img src={ione} alt="" />
              <h4>Passionate Craftsmanship</h4>
            </div>
            <p>
              Every garment at Klothink is crafted with passion, reflecting our
              commitment to quality and innovation.
            </p>
          </div>
          <div className="ecard">
            <div className="ecard-img-box">
              <img src={ione} alt="" />
              <h4>Passionate Craftsmanship</h4>
            </div>
            <p>
              Every garment at Klothink is crafted with passion, reflecting our
              commitment to quality and innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="comment">
        <div className="com-text-box">
          <div className="comhbox">
            <h1>Customers Love.</h1>
            <p>
              At Klothink, our customers are the heartbeat of our brand. Explore
              the heartfelt testimonials shared by those who have experienced
              the magic of Klothink fashion.
            </p>
          </div>
          <button>View All Testimonials</button>
        </div>
        <div className="com-card-box">
          <div className="comcard">
            <div className="comib">
              <img src={io} alt="" />
              <div className="comib-h">
                <h5>Sarah Thompson</h5>
                <div className="com-i-box">
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
              Klothink exceeded my expectations. The gown's quality and design
              made me feel like a queen. Fast shipping, too!
            </p>
          </div>
          <div className="comcard">
            <div className="comib">
              <img src={it} alt="" />
              <div className="comib-h">
                <h5>Rajesh Patel</h5>
                <div className="com-i-box">
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
              Absolutely love the style and warmth of the jacket. A perfect
              blend of fashion and functionality!
            </p>
          </div>
          <div className="comcard">
            <div className="comib">
              <img src={ith} alt="" />
              <div className="comib-h">
                <h5>Sarah Thompson</h5>
                <div className="com-i-box">
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
              Adorable and comfortable! My daughter loves her new outfit. Thank
              you, Klothink, for dressing our little fashionista.
            </p>
          </div>
        </div>
      </div>
      <div className="questions">
        <h1>Questions? We Have Answers.</h1>
        <p className="que-p">
          Ease into the world of Klothink with clarity. Our FAQs cover a
          spectrum of topics, ensuring you have the information you need for a
          seamless shopping experience.
        </p>
        <ul>
          <li>All</li>
          <li>Ordering</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Customer Support</li>
        </ul>
        <div className="que-accordion">
          <div className="accs">
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Can I modify my order after placing it?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How do I initiate a return?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How can I unsubscribe from the newsletter?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Do you offer exchanges for products?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
          </div>
          <div className="accs">
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How can I place an order on Klothink?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>What payment methods do you accept?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How can I track my order?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>What is your shipping policy?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
          </div>
          <div className="accs">
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Are there any additional fees for returns?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>How do I create an account on Klothink?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Can I change my account information?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
            <div className="acc-card">
              <input type="checkbox" name="" id="" />
              <div className="acc-icon-box">
                <h2>Are my personal details secure on Klothink?</h2>
                <i>
                  <FaPlus />
                </i>
              </div>
              <p className="acc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias ea omnis doloremque maxime, alias dignissimos corrupti
                recusandae ratione velit debitis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <h1>Seamless Experience.</h1>
        <p className="p">
          At Klothink, we've designed a straightforward shopping experience to
          make fashion accessible. Explore the journey from discovering the
          latest trends to receiving your handpicked styles with ease.
        </p>
        <div className="experience-cards-box">
          <div className="exper-card">
            <h1>01</h1>
            <h4>Discover Trends</h4>
            <p>Explore our curated collection of over 1000 styles</p>
          </div>
          <div className="exper-card">
            <h1>02</h1>
            <h4>Secure Checkout</h4>
            <p>
              Add your items to the cart and proceed to our secure checkout.
            </p>
          </div>
          <div className="exper-card">
            <h1>03</h1>
            <h4>Discover Trends</h4>
            <p>Experience 95% same-day dispatch on orders.</p>
          </div>
          <div className="exper-card">
            <h1>04</h1>
            <h4>Unbox Happiness</h4>
            <p>Receive your carefully packaged Klothink order.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
