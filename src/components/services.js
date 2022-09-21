import React from "react";
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

export default function Services() {
    return (
        <>
            <div className="sponsors-title">
                <h3>Services Partner</h3>
            </div>
            <div className="amex">

                <img src={require('./images/nestle.jpeg')} />
                <img src={require('./images/cornitos.jpeg')} />

                {/* <ul>
                    <li><FaLinkedinIn size={25}/></li>
                    <li><FaTwitter size={25} /></li>
                    <li><BsGlobe size={25} /></li>
                </ul> */}
            </div>
        </>
    )
}