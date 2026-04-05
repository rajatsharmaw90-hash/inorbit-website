import React from "react";

function Features({ props }) {
  return (
    <div>
      <div className="container-fluid feature-container">
        <div className="container">
          <h1 className="why-h1">
          <span className="me-3  light">WHY</span>
          <span className=" bold">INORBIT</span>
        </h1>
            <h4>{props.whyUs}</h4>
          <div className="row" id="feature-container">
            
            <div className="col-lg-8 left-text">
              <ul >
                <h4 className="fw-bold serv-h4">{props.job1}</h4>
                <p className="serv-p">{props.job1p}</p>

                 <h4 className="fw-bold serv-h4">{props.job2}</h4>
                <p className="serv-p">{props.job2p}</p>
            

             <h4 className="fw-bold serv-h4">{props.job3}</h4>
                <p className="serv-p">{props.job3p}</p>
            
            
              </ul>
            </div>
            <div className="col-lg-4 serv-img">
                <img src={props.servImg1} alt="" className="img-fluid " id="serv-img"/>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
