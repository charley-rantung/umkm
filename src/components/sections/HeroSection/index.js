import React from "react";
import "./heroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-wrapper">
        <div className="left">
          <p className="title">
            Harga Murah <br /> Kualitas Mewah
          </p>
          <p className="desc">
            Kami menciptakan produk berupa furnitur yang terbuat dari
            bahan-bahan terbaik. Komitmen kami untuk terus bekerja dengan penuh
            rasa tanggung jawab demi memenuhi keinginan dan kepuasan pelanggan.
          </p>
          <form className="search-form" action="" method="">
            <input type={"text"} placeholder="Search your product here.." />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="right">
          <div className="hero-img-wrapper">
            <div className="hero-img-circle"></div>
            <img
              className="hero-img"
              src={require("../../../assets/images/heroImg.jpg")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
