import React from "react";
import services from "./services";
import { Link } from "react-router-dom";

function ServicesGrid() {
  return (
    <div>
      <div className="container">
        <div className="row" id="service-row">
          <h1>What We Offer</h1>
          <p>We go beyond staffing—offering skilled professionals across plumbing, electrical, IT services, dog walking, and both commercial and residential solutions tailored to your needs.</p>
          {services.map((service) => (
            <div key={service.id} className="col-lg-4">
              <div id="service-card">
                
             <Link to={`/service/${service.slug}`} key={service.id} style={{ textDecoration: "none", color: "black" }}>
                   <div className="service-card-content">
                    <img src={service.imgURL} alt=""  className="img-fluid" id="service-img"/>
                   <p>{service.name}</p>
                   </div>

             </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ServicesGrid;
