import React from "react";
import { Link } from "react-router-dom";

function HeroSection3() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src="./images/employees.png" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-8 ">
            <h1 className="career-title">CAREER DEVELOPMENT</h1>
            <p>
              At INORBIT GROUP LTD., we believe that every job is a stepping
              stone toward a successful career. Our commitment goes beyond
              simply placing candidates—we focus on helping individuals grow,
              develop new skills, and achieve long-term professional goals. By
              connecting you with reputable employers across various industries,
              we provide opportunities that match your strengths while
              encouraging continuous learning and advancement. With our
              dedicated support, guidance, and access to diverse roles, Inorbit
              Group Ltd empowers you to build a stable, rewarding, and
              future-focused career.
            </p>
            <button type="submit" className="learn-btn">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection3;
