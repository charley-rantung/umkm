import React from "react";
import "./subscriptionSection.scss";
import { Fade } from "react-awesome-reveal";

const SubscriptionSection = () => {
    return (
        <div className="subscription-section">
            <Fade duration={2000} direction="up" triggerOnce>
                <div className="subscription-section-wrapper">
                    <p className="subscription-title">
                        Dapatkan Potongan Harga Sekarang
                    </p>
                    <p className="subscription-desc">
                        kami akan mengirimkan voucher dengan potongan harga 10%
                        ke email anda dengan berlangganan sekarang.
                    </p>
                    <form className="subscription-form">
                        <input
                            className="subscription-input"
                            type={"email"}
                            placeholder="Enter Email"
                        />
                        <button className="subscription-button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </Fade>
        </div>
    );
};

export default SubscriptionSection;
