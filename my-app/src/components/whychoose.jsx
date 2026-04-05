import React from "react";
import steps from "../data/steps";
import Footer from "./footer";
import { Link } from "react-router-dom";
import About from "../pages/About";

function WhyChoose() {
  return (
    <>
    <div className="container">
     

      <div className="whyus-section">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
           <div className="about-left ">
             <h1 className="fw-bold">WHO WE ARE</h1>
            
              
              <p className="div d-flex align-items-center">
                At Inorbit Group Ltd., we specialize in providing a wide range
                of professional services tailored to meet the needs of modern
                homes and businesses. Our team is built on experience,
                reliability, and a strong commitment to customer satisfaction.
                We take pride in delivering consistent results through skilled
                workmanship and a structured approach to every project.
              </p>
           </div>
            
          </div>
          <div className="col-lg-6">
            <img src="./images/team-work.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">

        <div className="about-card col-lg-6">
      
           <h3 className="fw-bold">Our Mission </h3>

          <p>
            At Inorbit Group Ltd., our mission is to provide reliable,
            high-quality, and affordable service solutions that simplify
            everyday needs for our customers. We aim to bridge the gap between
            customers and skilled professionals by delivering services that are
            efficient, dependable, and tailored to each requirement. Through a
            strong commitment to professionalism, timely execution, and customer
            satisfaction, we strive to ensure that every project—big or small—is
            completed with precision and care.
          </p>
        </div>

        <div className="about-card col-lg-6">
          <h3 className="fw-bold">Our Vision </h3>
          <p>
            Our vision is to become a trusted and recognized service provider
            known for excellence, reliability, and innovation. We aim to
            continuously expand our services, improve our processes, and build
            long-term relationships with our clients by consistently delivering
            value and quality. By focusing on trust, transparency, and
            continuous improvement, we aspire to set new standards in service
            delivery across both residential and commercial sectors.
          </p>
        </div>
        </div>

      </div>

      <div className="how-it-works">
        <h1 className="fw-bold">How It Works</h1>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h1>Need a Reliable Service Provider?</h1>
        <p>
          We’re here to help with professional, efficient, and dependable
          solutions tailored to your needs.
        </p>
        <button type="submit" className="cta">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
    </div>
    
    <Footer /></>

    
  );
}

export default WhyChoose;
