import React from "react";

export default function Sponsors(props){
    return(
        <div className="sponsors-main">
            <div className="sponsors-title">
                <h3>{props.title}</h3>
            </div>

            <div className="sponsors-images">
                <img src={props.image1} />
                {/* <img src={props.image3} /> */}
                
            </div>
        </div>
    )
}