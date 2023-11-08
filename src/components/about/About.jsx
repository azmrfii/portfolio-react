import React from "react";
import "./about.css";
import Me from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Me} alt="" className="about__img"/>

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        I am a graduate majoring in software engineering for 3 years, my interest in programming makes 
                        me want to learn more about programming.
                        </p>
                        <a href="#contact" className="btn">Download CV</a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Developer</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Database</h3>
                                <span className="skills__number">85%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage database"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About