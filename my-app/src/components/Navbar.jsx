import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <img src="./images/inorbitlogo.png" alt="" className="img-fluid brand-logo" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
          <Link to="/" className="nav-animate1">Home</Link>
          
          <Link to="/about" className="nav-animate3">About Us</Link>
          <Link to="/contact" className="nav-animate4">Contact</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar;