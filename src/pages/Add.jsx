import React, { useState } from "react";
function Add() {
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [fit, setFit] = useState();
  const [price, setPrice] = useState();
  const [material, setMaterial] = useState();

  const SendingData = () => {
    const newData = {
      img,
      name,
      category,
      fit,
      price,
      material,
    };
    fetch("http://localhost:2008/clothes", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => window.location.assign("/"));
  };
  return (
    <div className="addd">
      <section className="Add">
        <h1>Kiyim qo’shish sahifasi</h1>
        <form action="" onSubmit={SendingData}>
          <div className="add-input-box">
            <div className="add-input">
              <div className="label-box">
                <label htmlFor="">Rasm uchun havola</label>
              </div>
              <input
                value={img}
                onChange={(e) => setImg(e.target.value)}
                type="text"
                placeholder="Rasmni havolasini qo’ying"
              />
            </div>
            <div className="add-input">
              <div className="label-box">
                <label htmlFor="">Kiyim nomi</label>
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Kiyim nomini kiriting"
              />
            </div>
            <div className="add-input">
              <div className="label-box">
                <label htmlFor="">Kiyim turi</label>
              </div>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Kiyim turi"
              />
            </div>
            <div className="add-input">
              <div className="label-box">
                <label htmlFor="">Mosligini kiriting</label>
              </div>
              <input
                value={fit}
                onChange={(e) => setFit(e.target.value)}
                type="text"
                placeholder="Razmer"
              />
            </div>
            <div className="add-input">
              <div className="label-box">
                <label htmlFor="">Kiyim narxi</label>
              </div>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Kiyim narxi kiriting"
              />
            </div>
            <div className="add-input">
              <div className="label-box">
                <label htmlFor="">Kiyim materiali</label>
              </div>
              <input
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                type="text"
                placeholder="Kiyim materilalini kiriting"
              />
            </div>
            <button>Kiyim qo’shish</button>
          </div>
        </form>
      </section>
    </div>
  );
}
export default Add;
