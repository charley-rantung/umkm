import React from "react";
import "./feedbackCard.scss";

const FeedbackCard = () => {
    return (
        <div className="feedback-card-container">
            <div className="feedback-content-wrapper">
                <div className="feedback-avatar">
                    <img src={require("../../../assets/images/avatar.jpg")} />
                </div>
                <div className="feedback-detail">
                    <p className="customer-name">Charley Rantung</p>
                    <p className="customer-rating">⭐⭐⭐⭐⭐</p>
                    <p className="customer-feedback">
                        Produk sangat baik. Kuat dan kokoh tidak gampang patah.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;
