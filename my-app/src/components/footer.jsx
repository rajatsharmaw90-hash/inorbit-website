import React from "react"
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div>
            <div className="container-fluid" >
                <div className="row" id="footer">
                    <div className="col-lg-4 footer-logo">
                           <img src="../images/inorbitlogo.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-4">
                        <ul className="footer-links">
                            <p>998 Seymour St.</p>
                            <p>Vancouver, BC</p>
                            <p>V6B 7B6</p>
                        </ul>
                    </div>

                     <div className="col-lg-4">
                        <ul className="footer-links">
                            <p>+1 (778) 710-0061</p>
                            <p>inorbitgropultd@gmail.com</p>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;