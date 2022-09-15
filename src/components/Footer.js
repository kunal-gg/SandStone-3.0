import React from "react";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="footer-container">

            <div className="footer-main">

                <div className="footer-column">

                    <div className="footer-column-heading">
                        <h4>Sandstone</h4>
                        <hr></hr>
                    </div>
                        <ul>
                            <li className="insti-address">
                                Indian Institute of Technology Jodhpur NH 65 Nagaur Road Karwar 342030, Jodhpur District
                                
                            </li>
                            <li>
                                Phone Number:  +91 9523218750 
                            </li>
                            <li>
                                Email: sandstone@iitj.ac.in
                            </li>
                        </ul>
                    
                </div>


                <div className="footer-column">
                    <div className="footer-column-heading">
                        <h4>Quick Links</h4>
                        <hr></hr>
                        <li>Theme</li>
                        <li>Sponsors</li>
                        <li>Core Team</li>
                    </div>
                </div>

                <div className="footer-column">
                    <div className="footer-column-heading">
                        <h4>External Links</h4>
                        <hr></hr>
                        <li><a href="https://iitj.ac.in/schools/index.php">SME IIT Jodhpur</a></li>
                    </div>
                </div>

                <div className="footer-column" id="social-media-links">
                    <div className="footer-column-heading" >
                        <h4>Social Links</h4>
                        <hr></hr>
                        <ul>
                            <li><FaInstagram size={25}/></li>
                            <li><FaFacebookF size={25}/></li>
                            <li><FaLinkedinIn size={25}/></li>
                            <li><FaTwitter size={25} /></li>
                        </ul>
                     
                    </div>
                
            </div>
        </div>
    </div>
        
    )
}