import React from "react";
import "./advantageSection.scss";
import { Fade } from "react-awesome-reveal";

import {
    Facebook,
    Instagram,
    Whatsapp,
    Skype,
    Email,
    Dollar,
    ThumbsUp,
    Truck,
} from "../../../assets";

const AdvantageSection = () => {
    return (
        <div className="advantage-section">
            <div className="social-section">
                <img src={Facebook} />
                <img src={Instagram} />
                <img src={Whatsapp} />
                <img src={Skype} />
                <img src={Email} />
            </div>
            <div className="advantage-section-wrapper">
                <Fade duration={2000} triggerOnce>
                    <p className="advantage-title">
                        Keunggulan Pemesanan di Tempat Kami
                    </p>
                </Fade>
                <div className="advantage-item-wrapper">
                    <Fade duration={2000} direction={"up"} triggerOnce>
                        <div className="advantage-item-card">
                            <div className="advantage-item">
                                <div className="advantage-item-title-wrapper">
                                    <div className="advantage-item-icon-wrapper">
                                        <img src={Dollar} />
                                    </div>
                                    <p className="advantage-item-title">
                                        Harga Terbaik
                                    </p>
                                </div>
                                <p className="advantage-item-desc">
                                    Miliki furnitur berkualitas dengan harga
                                    yang terjangkau. Hanya dengan mengeluarkan
                                    sedikit dana, anda akan dapat memiliki
                                    produk-produk yang anda butuhkan.
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade duration={2000} direction={"up"} triggerOnce>
                        <div className="advantage-item-card">
                            <div className="advantage-item">
                                <div className="advantage-item-title-wrapper">
                                    <div className="advantage-item-icon-wrapper">
                                        <img src={ThumbsUp} />
                                    </div>
                                    <p className="advantage-item-title">
                                        Bahan Berkualitas
                                    </p>
                                </div>
                                <p className="advantage-item-desc">
                                    Menggunakan bahan-bahan piihan yang tahan
                                    tehadap cuaca ekstrim. Tahan terhadap
                                    kondisi lembap atau basah. Mencegah
                                    terjadinya pelapukan dan tahan terhadap
                                    terik matahari yang panas..
                                </p>
                            </div>
                        </div>
                    </Fade>
                    <Fade duration={2000} direction={"up"} triggerOnce>
                        <div className="advantage-item-card">
                            <div className="advantage-item">
                                <div className="advantage-item-title-wrapper">
                                    <div className="advantage-item-icon-wrapper">
                                        <img src={Truck} />
                                    </div>
                                    <p className="advantage-item-title">
                                        Pengiriman Cepat
                                    </p>
                                </div>
                                <p className="advantage-item-desc">
                                    Kami mengandalkan jasa ekspedisi yang
                                    terpercaya, yang mampu mengirimkan paket
                                    dengan cepat melalui darat, laut dan udara.
                                    Kami menjamin keselamatan barang yang
                                    dikirimkan tidak akan rusak selama
                                    perjalanan.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default AdvantageSection;
