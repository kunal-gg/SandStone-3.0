import React from "react";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import HomePage from "./Homepage";


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
                        <li><a href="#"></a>Theme</li>
                        <li><a href="#">Sponsors</a></li>
                        <li><a href="#">Core Team</a></li>
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
                        <ul id="social-media-links-that-do-not-work">
                            <li><a href="https://www.instagram.com/sme_iitj"><FaInstagram size={25}/></a></li>
                            <li><a href="https://www.linkedin.com/school/sme-iitj/"><FaFacebookF size={25}/></a></li>
                            <li><a href="https://www.facebook.com/"><FaLinkedinIn size={25}/></a></li>
                            <li><a href="https://twitter.com/"><FaTwitter size={25} /></a></li>
                        </ul>
                     
                    </div>
                
            </div>
        </div>
    </div>
        
    )
}