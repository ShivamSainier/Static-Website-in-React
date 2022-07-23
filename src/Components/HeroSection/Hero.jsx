import React from 'react';
import Header from '../Header/Header';
import "./Hero.css";
import Heart from "../../assets/heart.png"

const Hero = () => {
    return (
        <div className='hero'>
            <div className='left-h'>
                <Header />
                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the town </span>
                </div>
                {/* Hero Heading */}
                    <div className="hero-text">
                        <div>
                            <span className="stroke-text">Shape </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Ieadl Body</span>
                        </div>
                        <div>
                            <span>
                                In here we will help help you to shape and build your ideal body and live up your life to fullest
                            </span>
                        </div>
                    </div>
                {/* Figure Section  */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                {/* Hero Buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            
            </div>
            <div className='right-h'>
                <button className="btn">Join now</button>
                <div className="heart-rate">
                    <span>Heart Rate</span>
                    <span> 116 bpm</span>
                </div>
            </div>
        </div>
      
  )
}

export default Hero