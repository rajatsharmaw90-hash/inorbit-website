import React from "react";
import { Link } from "react-router-dom";

function HeroSection1(){
    return(
        <div>
            <div className="container">
                <div className="row" id="hero-section1">
                    <div className="col-lg-4">
                        <div className="left-text">
                            <h1>Looking for skilled, reliable workers?</h1>
                           <h2>
                            We connect you with talent that’s ready to perform from day one.
                           </h2>
                           <button type="submit" className="booking-btn">
                            <Link to="/contact">START HIRING</Link>
                           </button>
                           <button type="submit" className="booking-btn"><Link to="/contact">GET A JOB</Link></button>
                        </div>
                    </div>
                    <div className="col-lg-8" id="hero1-right-img">
                        <img src="./images/heroimg.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default HeroSection1;