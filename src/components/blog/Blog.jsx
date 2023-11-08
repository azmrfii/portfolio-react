import React from "react";
import "./blog.css";
import Img1 from "../../assets/blog-1.svg";
import Img2 from "../../assets/blog-2.svg";
import Img3 from "../../assets/blog-3.svg";

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latets Post</h2>
            
            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Review</span></a>
                        <a href="#"><img src={Img1} alt="" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">bset ap</h3>
                        <div className="blog__meta">
                            <span></span>
                            <span className="blog__dot">.</span>
                            <span>Azzam</span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Review</span></a>
                        <a href="#"><img src={Img3} alt="" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Tutor</h3>
                        <div className="blog__meta">
                            <span></span>
                            <span className="blog__dot">.</span>
                            <span>Azzam</span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Review</span></a>
                        <a href="#"><img src={Img2} alt="" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">best app</h3>
                        <div className="blog__meta">
                            <span></span>
                            <span className="blog__dot">.</span>
                            <span>Azzam</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog