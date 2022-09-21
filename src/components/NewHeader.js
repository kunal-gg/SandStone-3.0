/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./NewHeader.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";


export default function NewHeader() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            {/* <img src={require("./images/Sandstone logo.png")} className="Logo" alt="logo" /> */}
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >

                <nav className="Nav">
                        <a> <Link to={'/'}className='other-header-list-link'>Home</Link> </a>
                        <a><Link to={'/speakers'} className='other-header-list-link'>Speakers</Link></a>
                        <a><Link to={'/sponsors'} className='other-header-list-link'>Sponsors</Link></a>
                        <a><Link to={'/team'} className='other-header-list-link'>Our Team</Link></a>
                        <a><Link to={'/hackathon'} className='other-header-list-link'>Verticals</Link></a>
                        <a><Link to={'/theme'} className='other-header-list-link'>Theme</Link></a>
                    {/* <a href="/">Home</a>
                    <a href="/">Articles</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a> */}
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                {/* Add three horizontal lines */}
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>

            </button>
        </header>
    );
}
