import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div class="other-header-container">
            <div class="other-header-main">
                <div class="other-header-logo">
                    {/* <img src={require('./images/Sandstone logo.png')}  width='290px'/> */}
                </div>
                <div class="other-header-list">
                    <ul>
                        <Link to={'/'} onClick={window.scrollTo(0, 0)}
                            className='other-header-list-link'>Home</Link>
                        <Link to={'/speakers'} className='other-header-list-link'>Speakers</Link>
                        <Link to={'/sponsors'} className='other-header-list-link'>Sponsors</Link>
                        <Link to={'/team'} className='other-header-list-link'>Core Team</Link>
                        <Link to={'/hackathon'} className='other-header-list-link'>Sandstone Veticals</Link>
                        <Link to={'/theme'} className='other-header-list-link'>Theme</Link>
                        {/* <li>Speakers</li>
                    <li>Sponsors</li>
                    <li>Core Team</li>
                    <li>Hackathon</li> */}
                    </ul>
                </div>

            </div>
            <div class="header-background-image">
                {/* <img src={require('./images/Header/background image.png')} /> */}
                {
                    /* Add gradient as set in css */
                }
            </div>
        </div>
    )
}