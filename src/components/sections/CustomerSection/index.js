import React from "react";
import "./customerSection.scss";
import FeedbackCard from "../../organisms/FeedbackCard";
import { Fade } from "react-awesome-reveal";

const CustomerSection = () => {
    return (
        <div className="customer-section">
            <div className="customer-section-wrapper">
                <Fade duration={2000} triggerOnce>
                    <p className="customer-section-title">
                        Dari Pelanggan Kami
                    </p>
                </Fade>
                <div className="customer-feedback-wrapper">
                    <Fade duration={2000} triggerOnce>
                        <FeedbackCard />
                        <FeedbackCard />
                        <FeedbackCard />
                        <FeedbackCard />
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default CustomerSection;
