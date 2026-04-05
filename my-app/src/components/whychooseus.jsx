import React from "react"
import features from "../data/features";

function WhyChooseUs(){
    return(
        <div className="container" id="whychoose-container">
            <div className="row">
                    <div className="whyChoose-container-top">
                        
                <h1 className="fw-bold">Why Choose Inorbit Group Ltd.</h1>
                <p>We deliver reliable, professional, and efficient solutions tailored to your needs.</p>
                    </div>
               {features.map((feature, index) =>(
                <div className="col-lg-4" key={index}>
                    <div className="hero2-card">
                        <img src={feature.icon} alt="" className="fs-1 mb-3 img-fluid"/>
                    <h3>{feature.title}</h3>
                    <p className="text-muted">{feature.text}</p>
                    </div>
                </div>
               ))}
            </div>
        </div>
    )
}

export default WhyChooseUs;