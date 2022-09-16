import React from "react"
import { Link } from "react-router-dom"

export default function HomePage(){
    return(
        <div>
            <div className="main-page-hero">

                <video autoPlay loop muted playsInline className="background-video">
                    <source src="https://i.imgur.com/FRUwgbE.mp4" type="video/mp4" />
                </video>
                <nav className="main-page-nav">
                    <img src={require("./images/Sandstone logo.png")}  className="logo"/>
                    <ul>
                        <Link to='/' className="hero-list-link">Home</Link>
                        <Link to='/speakers' className="hero-list-link">Speakers</Link>
                        <Link to='/sponsors' className="hero-list-link">Sponsors</Link>
                        <Link to='/team' className="hero-list-link">Core Team</Link>
                        <Link to='/hackathon' className="hero-list-link">Events </Link>
                        
                        
                        
                        
                    </ul>
                </nav>

                <div className="main-page-content">
                    <h1>Sand<span>Stone</span></h1>
                    
                    
                </div>

            </div>
        </div>
    )
 
}