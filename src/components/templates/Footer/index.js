import React from "react";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div className="left">
                        <p>PT. Usaha Mikro Kecil Menengah</p>
                        <p>
                            Ruko Sentra Niaga Green Lake L7 Jl. Green Lake City
                            Boulevard Cengkareng, DKI Jakarta 11750
                        </p>
                        <p>All Rights Reserved ©2022 Charley Rantung</p>
                    </div>
                    <div className="right">
                        <a href="">Term of Services</a>
                        <a href="">FAQ's</a>
                        <a href="">Help</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Support US</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
