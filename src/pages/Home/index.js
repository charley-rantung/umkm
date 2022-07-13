import React from "react";
import "./home.scss";

import HeroSection from "../../components/sections/HeroSection";
import AdvantageSection from "../../components/sections/AdvantageSection";
import InspirationSection from "../../components/sections/InspirationSection";
import CustomerSection from "../../components/sections/CustomerSection";
import SubscriptionSection from "../../components/sections/SubscriptionSection";

import Navbar from "../../components/templates/Navbar";
import Footer from "../../components/templates/Footer";

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="body">
                <HeroSection />
                <AdvantageSection />
                <InspirationSection />
                <CustomerSection />
                <SubscriptionSection />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
