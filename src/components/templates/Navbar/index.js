import React from "react";
import "./navbar.scss";
import { UMKM } from "../../../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="brand-wrapper">
          <img className="brand-icon" src={UMKM} alt="" />
          <p className="brand-title">UMKM</p>
        </div>
        <div className="navigation-wrapper">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Product</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Contact"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
