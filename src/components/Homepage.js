import React from "react"
import { CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";
import { IconBase } from "react-icons"
import { FaCalendar, FaLocationArrow, FaMapPin, FaPlay, FaPlayCircle, FaVideo } from "react-icons/fa"
import { Link } from "react-router-dom";
export default function HomePage() {
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
        <div>
            <div className="main-page-hero" id="home">
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit
                >

                    <nav className="Nav">
                        <a> <Link to={'/'} className='other-header-list-link'>Home</Link> </a>
                        <a><Link to={'/speakers'} className='other-header-list-link'>Speakers</Link></a>
                        <a><Link to={'/sponsors'} className='other-header-list-link'>Sponsors</Link></a>
                        <a><Link to={'/team'} className='other-header-list-link'>Core Team</Link></a>
                        <a><Link to={'/hackathon'} className='other-header-list-link'>Sandstone Verticals</Link></a>
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
                <video autoPlay loop muted playsInline className="background-video">
                    <source src="https://imgur.com/5OieuMs.mp4" type="video/mp4" />
                </video>
                {/* <nav className="main-page-nav">
                    <img src={require("./images/Sandstone logo.png")}  className="logo" />
                    <ul>
                        <Link to='/' className="hero-list-link">Home</Link>
                        <Link to='/speakers' className="hero-list-link">Speakers</Link>
                        <Link to='/sponsors' className="hero-list-link">Sponsors</Link>
                        <Link to='/team' className="hero-list-link">Core Team</Link>
                        <Link to='/hackathon' className="hero-list-link">Sandstone Verticals </Link>
                        <Link to='/theme' className="hero-list-link">Theme </Link>  
                    </ul>
                </nav> */}



                <div className="main-page-content">
                    {/* <h1>Sand<span className="stone">Stone</span></h1> */}
                    <h1>SANDSTONE</h1>
                    <h2>India Accelerates: Canvassing Vicennial Sustainability</h2>
                    <div className="group">
                        <h4><FaMapPin color="red" /> IIT Jodhpur</h4>
                        <h4><FaCalendar color="#4284FF" /> 23rd-25th September</h4>
                    </div>
                    <div className="group-button">
                        <a href="#" target="_blank"><button className="btn-grad"> Enter Platform </button></a>
                        <a href="https://drive.google.com/drive/folders/1bIoM51tgU38RH70jL99f1MOY7REhusiQ" target="_blank"><button className="btn-grad"> <FaPlayCircle /> Theme Reveal </button></a>
                    </div>

                </div>


            </div>
        </div>
    )

}