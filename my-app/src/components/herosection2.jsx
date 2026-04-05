import React from "react";

function HeroSection2(){
    return(
        <div>
            <div className="container">
                <div className="row" id="hero2-container">
                    <h1>Our Commitments</h1>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="./images/fastdelivery.png" alt="" className="img-fluid"/>
                           <p>We ensure our workers arrive on time, every time. With organized and dependable transport services, we minimize delays and keep your operations running smoothly.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="./images/vest.png" alt="" className="img-fluid" />
                            <p>Our workers come fully equipped with the necessary safety gear and are prepared to meet workplace safety standards from day one.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src="./images/exchange.png" alt="" className="img-fluid"/>
                            <p>If a replacement is ever needed, we act fast. Our team provides quick and efficient worker replacements to avoid disruptions to your business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection2;