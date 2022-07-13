import React from "react";
import "./about.scss";
import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";

const About = () => {
    return (
        <div className="about-container">
            <Navbar />
            <div className="body">
                <div className="body-wrapper">
                    <div className="left">
                        <p>Tentang Kami</p>
                        <p>
                            Do non tempor sunt veniam qui. Nisi reprehenderit
                            aute magna laboris. Ex velit adipisicing ipsum in
                            ullamco fugiat eu ipsum.Irure ipsum deserunt laborum
                            aliqua quis esse commodo occaecat sunt sint ex duis
                            excepteur. Dolor sunt velit culpa ea dolor non
                            excepteur veniam nulla Lorem excepteur et. Laborum
                            enim culpa nostrud est ut mollit labore nostrud ea
                            aliqua magna sunt laborum. Ut anim consequat
                            pariatur ullamco esse sint reprehenderit deserunt
                            esse commodo officia consectetur. Veniam aliqua nisi
                            commodo amet ullamco. Cupidatat et Lorem amet dolor
                            excepteur mollit eu laborum in ipsum duis eu. Enim
                            eiusmod nulla duis eu amet sit amet labore deserunt
                            Lorem ad aute pariatur ex. {"\n\n"}
                        </p>
                        <p>
                            Minim nostrud labore fugiat eiusmod adipisicing
                            sit.Consectetur proident ipsum pariatur
                            reprehenderit mollit aliqua voluptate velit non
                            magna nisi mollit. Fugiat incididunt consequat elit
                            ex labore nulla mollit occaecat ex nostrud
                            consectetur sunt sint ex. Officia sunt reprehenderit
                            tempor proident ullamco Lorem qui nulla qui. Officia
                            enim adipisicing duis nostrud. Commodo incididunt ut
                            aliquip sit ad ipsum laboris pariatur deserunt
                            occaecat pariatur.Aute aliqua ad nostrud esse.
                            Reprehenderit culpa eu et mollit incididunt
                            excepteur Lorem Lorem cillum. Duis dolor ullamco id
                            consequat enim incididunt enim. Reprehenderit anim
                            tempor ex adipisicing ullamco elit ut veniam sit in.
                            Est fugiat sint consectetur nostrud ex Lorem ut.
                        </p>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
