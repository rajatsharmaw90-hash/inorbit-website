import React from "react"
import review from "../data/testimonial";

function Testimonial(){
    return(
        <div>
            <div className="container" id="testimonial-container">
               <div className="testimonial-top">
                 <h1>What our clients are saying</h1>
                <p>Our clients are our strongest proof of success. See how our flexible and permanent recruitment solutions have improved talent management and helped businesses across various industries grow and succeed.</p>
               </div>
                 <div className="row" >
                    {review.map((review, index) => (
                        <div className="col-lg-4" key={index}>
                            <img src={review.icon} alt="testimonial.svg" className="img-fluid" style={{height:"20px"}}/>
                            <h5>{review.review}</h5>
                            <p className="review">{review.name}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    )
}

export default Testimonial;