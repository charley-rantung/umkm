import React from "react";
import "./contactus.scss";
import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";

import FB from "../../assets/icons/fb.svg";

const ContactUs = () => {
    return (
        <div className="contactus-container">
            <Navbar />
            <div className="body">
                <div className="body-wrapper">
                    <div className="left">
                        <p>Hubungi Kami</p>
                        <form>
                            <label for="fullname">Nama Lengkap</label>
                            <input
                                type={"text"}
                                id="fullname"
                                placeholder="Masukkan nama anda"
                                required
                            />
                            <label for="email">Email</label>
                            <input
                                type={"email"}
                                id="email"
                                placeholder="Masukkan email"
                                required
                            />
                            <label for="message">Pesan</label>
                            <textarea
                                id="message"
                                placeholder="Apa yang ingin anda sampaikan ?"
                            />
                            <button type={"submit"}>Kirim</button>
                        </form>
                    </div>
                    <div className="right">
                        <div className="kontak">
                            <p>Facebook:</p>
                            <a
                                target={"_blank"}
                                href="https://www.facebook.com/Charley.Rantung/"
                            >
                                facebook.com/Charley Rantung
                            </a>
                        </div>
                        <div className="kontak">
                            <p>Instagram:</p>
                            <a
                                target={"_blank"}
                                href="http://www.instagram.com/rantungcharley/"
                            >
                                instagram.com/rantungcharley/
                            </a>
                        </div>
                        <div className="kontak">
                            <p>Email:</p>
                            <a
                                target={"_blank"}
                                href="mailto:rantungcharley@gmail.com"
                            >
                                rantungcharley@gmail.com
                            </a>
                        </div>
                        <div className="kontak">
                            <p>WhatsApp:</p>
                            <a
                                target={"_blank"}
                                href="https://wa.me/6282312030313"
                            >
                                +62 823-1203-0313
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
