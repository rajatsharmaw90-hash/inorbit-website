import React from "react";


function Solution({ props }){
    return(
        <div>
            <div className="container" id="sol-con">
                
                   <div className="container">
                     <div className="row">
                        <div className="col" id="solution-container">
                            <h1 className="solution-h1">{props.problemTitle}</h1>
                           <div className="row">
                            <div className="col-lg-6"> 
                            <img src={props.problemImg} alt="" className="img-fluid solution-img" />
                            </div>
                            <div className="col-lg-6" id="prob-text">
                                <p className="solution-text">{props.problemText}</p>
                            </div>
                           </div>
                        </div>
                    </div>
                   </div>
                </div>
           
        </div>
        
    )
}
export default Solution;