import React from "react";
import "./pricing.css";
import Img1 from "../../assets/price-1.svg";
import Img2 from "../../assets/price-2.svg";
import Img3 from "../../assets/price-3.svg";

const Pricing = () => {
    return (
        <section className="pricing container section">
            <h2 className="section__title">Pricing Plans</h2>

            <div className="pricing__container grid">
                <div className="pricing__item">
                    <img src={Img1} alt="" className="pricing__img" />
                    <h3 className="pricing__plan">tets</h3>
                    <p className="pricing__title">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p className="pricing__support">mon supp</p>
                    <h3 className="price">
                        <em>$</em>9 <span>Month</span>
                    </h3>
                    <a href="#" className="btn">Get</a>
                </div>
                <div className="pricing__item best">
                    <span className="badge">Recommended</span>
                    <img src={Img2} alt="" className="pricing__img" />
                    <h3 className="pricing__plan">Premium</h3>
                    <p className="pricing__title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <p className="pricing__support">xp lane</p>
                    <h3 className="price">
                        <em>$</em>9 <span>Month</span>
                    </h3>
                    <a href="#" className="btn">Get</a>
                </div>
                <div className="pricing__item">
                    <img src={Img3} alt="" className="pricing__img" />
                    <h3 className="pricing__plan">testtt</h3>
                    <p className="pricing__title">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <p className="pricing__support">gl lane</p>
                    <h3 className="price">
                        <em>$</em>9 <span>Month</span>
                    </h3>
                    <a href="#" className="btn">Get</a>
                </div>
            </div>
        </section>
    )
}

export default Pricing