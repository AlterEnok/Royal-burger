import React from "react";
import "./Promo.css";

import promoImage from "../../assets/promo.png";

const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__content">
                <h2 className="promo__title">
                    Get Up To <span><br></br>50% OFF</span>
                </h2>
                <p className="promo__subtitle">On Your 2 Order’s</p>
                <button className="promo__btn">Order Now</button>
            </div>
            <div className="promo__image">
                <img src={promoImage} alt="Promo" />
            </div>
        </section>
    );
};

export default Promo;
