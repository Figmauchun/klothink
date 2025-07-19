import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
function Products() {
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
      <div className="discover">
        <div className="dis-text-box">
          <h1>Discover Now</h1>
          <p>
            Dive into the world of fashion excellence at Klothink. Our curated
            selection brings together the latest trends and timeless classics,
            offering you a diverse array of clothing items that resonate with
            your unique style.
          </p>
        </div>
        <div className="dis-cards-box">
          <div className="dcb">
            <h3>Exclusive Offers</h3>
            <span>30% off on select items</span>
          </div>
          <div className="dcb">
            <h3>New Arrivals</h3>
            <span>50+ new arrivals Daily</span>
          </div>
          <div className="dcb">
            <h3>Over 1,500 +</h3>
            <span>curated fashion products.</span>
          </div>
        </div>
      </div>
      <div className="dis-filter-box">
        <div className="dis-btn-box">
          <button onClick={() => setCategory("all")}>All</button>
          <button onClick={() => setCategory("menswear")}>Menswear</button>
          <button onClick={() => setCategory("womenswear")}>Womenswear</button>
          <button onClick={() => setCategory("kidswear")}>Kidswear</button>
        </div>
      </div>
      <div className="description">
        <h3>Casual Collection</h3>
        <p>
          Discover our versatile men's casual wear collection, where comfort
          meets contemporary fashion.
        </p>
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
                      <div className="fit-box">
                        <p>{e.fit}</p>
                        <span>${e.price}</span>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
        </div>
      </Swiper>
    </>
  );
}

export default Products;
