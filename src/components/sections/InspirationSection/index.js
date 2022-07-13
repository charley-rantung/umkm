import React from "react";
import "./inspirationSection.scss";
import { Fade } from "react-awesome-reveal";

const InspirationSection = () => {
    return (
        <div className="inspiration-section">
            <div className="inspiration-section-wrapper">
                <div className="left">
                    <Fade duration={2000} direction={"left"} triggerOnce>
                        <img
                            className="inspiration-img"
                            src={require("../../../assets/images/inspirationImg.jpg")}
                        />
                    </Fade>
                </div>
                <div className="right">
                    <Fade duration={2000} direction={"right"} triggerOnce>
                        <p className="inspiration-title">
                            Temukan Desain Interior Impian Anda
                        </p>
                        <p className="inspiration-desc">
                            Temukan inspirasi untuk membangun suasana rumah anda
                            lebih menyenangkan. Kombinasi bentuk estetik dan
                            warna yang sempurna menemani hari-hari anda saat
                            beraktifitas di rumah.
                        </p>
                        <button className="inspiration-cta">Cek Disini</button>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default InspirationSection;
