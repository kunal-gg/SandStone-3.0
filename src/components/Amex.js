import React from "react";
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

export default function Amex(){
    return(
        <>
            <div className="amex">
                <h1>Title Sponsor</h1>
                <img src={require('./images/american-express.png')} />
                <ul>
                    <li><FaLinkedinIn size={25}/></li>
                    <li><FaTwitter size={25} /></li>
                    <li><BsGlobe size={25} /></li>
                </ul>
            </div>
            
            
            
        </>
    )
}