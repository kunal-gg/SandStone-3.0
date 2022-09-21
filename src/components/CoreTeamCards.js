import React from "react";
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { AiTwotonePhone } from 'react-icons/ai';


export default function Card(props){
    return(
        <div className="card-main">
            <div className="card-left-section">
                <div className="card-image">
                    <img src={props.image} />
                </div>
            </div>
            
            <div className="card-right-section">
                <div className="card-content">
                     <p className="name">{props.name}</p>
                    <p  className="por">{props.POR}</p>
                    {/* <ul>
                        <li><a href="#"><FaLinkedinIn size={22}/></a></li>
                        <li><a href="#"><SiGmail size={22}/></a></li>
                        <li><a href="#"><AiTwotonePhone size={22}/></a></li>
                    </ul> */}
                </div>

                <div className="card-social-media">
                    <ul>
                        {/* <li><FontAwesomeIcon icon="fa-brands fa-instagram" color="blue" /></li>
                        <li><FontAwesomeIcon icon="fa-brands fa-instagram" color="blue" /></li> */}
                    </ul>
                </div>
            </div>
            
           
        </div>
    )
}