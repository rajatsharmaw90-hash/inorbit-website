import React from "react";

function ServiceHero1({ data }) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        <div className="col-lg-6" >
          <h3 className=" brand-name">{data.brand}</h3>
          <h1 className=" service-name">{data.name}</h1>
          <h3 className="sub-text">{data.subText}</h3>
          <button type="submit" className="book-btn">Get Quote</button>
        </div>

        <div className="col-lg-6" id="hero-serv-img">
            <img src={data.imgURL} alt="" className="img-fluid service-hero-img"/>
        </div>
         

    

       
      </div>
    </div>
  );
}

export default ServiceHero1;