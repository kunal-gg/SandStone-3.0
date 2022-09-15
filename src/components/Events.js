import React from "react";

export default function Events(){
    return(
        <>
        <div className="slider-container" >
        <h1>
            Our Previous <span>Events</span>
        </h1>
        <div className="slider-main">
        <div className="slider">
        <div className="slider-images">
            <input type="radio" name="slide" id="img1" checked></input>
            <input type="radio" name="slide" id="img2"></input>
            <input type="radio" name="slide" id="img3"></input>
            
            <img src={require('./images/Events/Day-1.png')} className="m1" alt="img1" />
            <img src={require("./images/Events/Day-2.png")} className="m2" alt="img2" />
            <img src={require("./images/Events/Day-3.png")} className="m3" alt="img3" />
           
        </div>
        <div className="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            
        </div>
    </div>
        </div>
     </div>
       
        
        </>
        
    )
}