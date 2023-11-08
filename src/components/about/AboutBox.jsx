import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">90</h3>
                <span className="about__subtitle">Pc</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">121</h3>
                <span className="about__subtitle">caf</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">421</h3>
                <span className="about__subtitle">wafwf</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">12</h3>
                <span className="about__subtitle">fafw</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox