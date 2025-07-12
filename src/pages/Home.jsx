import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homei from "../images/homei.svg";
function Home() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("all");
  useEffect(() => {
    fetch("http://localhost:2008/clothes")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="Home">
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
                <svg
                  width="24.000000"
                  height="24.000000"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip151_14">
                      <rect
                        id="Icon"
                        rx="0.000000"
                        width="23.000000"
                        height="23.000000"
                        transform="translate(0.500000 0.500000)"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clip151_14)">
                    <path
                      id="Subtract"
                      d="M7.5 6L7.5 6.75L5.51 6.75C4.55 6.75 3.74 7.47 3.64 8.42L2.38 20.42C2.26 21.53 3.13 22.5 4.24 22.5L19.75 22.5C20.86 22.5 21.73 21.53 21.61 20.42L20.35 8.42C20.25 7.47 19.44 6.75 18.48 6.75L16.5 6.75L16.5 6C16.5 3.51 14.48 1.5 12 1.5C9.51 1.5 7.5 3.51 7.5 6ZM12 3C10.34 3 9 4.34 9 6L9 6.75L15 6.75L15 6C15 4.34 13.65 3 12 3ZM9 11.25C9 12.9 10.34 14.25 12 14.25C13.65 14.25 15 12.9 15 11.25L15 10.5C15 10.08 15.33 9.75 15.75 9.75C16.16 9.75 16.5 10.08 16.5 10.5L16.5 11.25C16.5 13.73 14.48 15.75 12 15.75C9.51 15.75 7.5 13.73 7.5 11.25L7.5 10.5C7.5 10.08 7.83 9.75 8.25 9.75C8.66 9.75 9 10.08 9 10.5L9 11.25Z"
                      fill="#262626"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
                Shop Now
              </button>
              <button className="btnt">Contact Us</button>
            </div>
            <div className="stata-box">
              <div className="stata-card">
                <h3>Over 1000+q</h3>
                <p>Trendsetting Styles</p>
              </div>
              <div className="stata-card">
                <h3>Over 1000+q</h3>
                <p>Trendsetting Styles</p>
              </div>
              <div className="stata-card">
                <h3>Over 1000+q</h3>
                <p>Trendsetting Styles</p>
              </div>
              <div className="stata-card">
                <h3>Over 1000+q</h3>
                <p>Trendsetting Styles</p>
              </div>
            </div>
          </div>
          <div className="abi">
            <img src={homei} alt="" />
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
            <button onClick={() => setCategory("all")}>all</button>
            <button onClick={() => setCategory("menswear")}>Menswear</button>
            <button onClick={() => setCategory("womenswear")}>
              Womenswear
            </button>
            <button onClick={() => setCategory("kidswear")}>Kidswear</button>
          </div>
          <div className="fil-btn">
            <button>Casual</button>
            <button>Formal</button>
            <button>Party</button>
          </div>
        </div>
        <div className="cards">
          {data &&
            data.map((e) => {
              return (
                <Link to={`/clothes/${e.id}`}>
                  <div className="card">
                    <div className="card-img-box">
                      <img src={e.img} alt="" />
                    </div>
                    <h4>{e.name}</h4>
                    <span>${e.price}</span>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    </>
  );
}

// export default Home;
// import React, { useEffect, useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import error from "../images/error.svg";
// import { Link } from "react-router-dom";

// function Home() {
//   const [data, setData] = useState([]);
//   const [load, setLoad] = useState(true);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   useEffect(() => {
//     setTimeout(() => {
//       fetch("http://localhost:2008/films")
//         .then((res) => res.json())
//         .then((json) => setData(json), setLoad(false))
//         .catch((err) => console.log(err));
//     }, 3000);
//   }, []);
//   const Qidruv = data.filter((e) => {
//     const inputsearch = e.name.toLowerCase().includes(search.toLowerCase());
//     const btnsearch = category === "all" || e.category == category;
//     return inputsearch && btnsearch;
//   });
//   return (
//     <>
//       <div>
//         <>
//           <div className="home">
//             <div className="home-l">
//               <h2>MaileHereko</h2>
//               <p>
//                 List of movies and TV Shows, I, Pramod Poudel have watched till
//                 date. Explore what I have watched and also feel free to make a
//                 suggestion. 😉
//               </p>
//               <div className="home-card">
//                 <div className="mini">
//                   <CiSearch className="i" />

//                   <input
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     type="text"
//                     placeholder="Search Movies or TV Shows"
//                   />
//                 </div>
//               </div>
//               <div className="buttons">
//                 <button onClick={() => setCategory("all")}>All</button>
//                 <button onClick={() => setCategory("movies")}>Movies</button>
//                 <button onClick={() => setCategory("Shows")}>TV Shows</button>
//               </div>
//               <h4>
//                 {category == "all"
//                   ? "All"
//                   : category == "Movies"
//                   ? "Movies"
//                   : "TV Shows"}
//                 ({Qidruv.length})
//               </h4>
//             </div>
//           </div>
//           {!load && Qidruv.length === 0 && (
//             <div className="lost">
//               <img src={error} alt="" />
//               <h2>Lost your way?</h2>
//               <p>
//                 Oops! This is awkward. You are looking for something that
//                 doesn't actually exist.
//               </p>
//               <button onClick={() => window.location.reload()}>Go Home</button>
//             </div>
//           )}
//           <div className="cards">
//             {load &&
//               [1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
//                 return (
//                   <div key={e} className="anim-card">
//                     <div className="anim-img"></div>
//                     <div className="anim-name"></div>
//                   </div>
//                 );
//               })}
//             {Qidruv &&
//               Qidruv.map((e) => {
//                 return (
//                   <Link to={`/films/${e.id}`}>
//                     <div className="card">
//                       <div className="card-img-box">
//                         <img src={e.img} alt="" />
//                       </div>
//                       <h4>{e.name}</h4>
//                     </div>
//                   </Link>
//                 );
//               })}
//           </div>
//         </>
//       </div>
//     </>
//   );
// }

// export default Home;
