import React from "react"
import { IconBase } from "react-icons"
import { FaCalendar, FaLocationArrow, FaMapPin, FaPlay, FaPlayCircle, FaVideo } from "react-icons/fa"
import { Link } from "react-router-dom"
export default function HomePage(){
    return(
        <div>
            <div className="main-page-hero">

                <video autoPlay loop muted playsInline className="background-video">
                    <source src="https://imgur.com/5OieuMs.mp4" type="video/mp4" />
                </video>
                <nav className="main-page-nav">
                    <img src={require("./images/Sandstone logo.png")}  className="logo"/>
                    <ul>
                        <Link to='/' className="hero-list-link">Home</Link>
                        <Link to='/speakers' className="hero-list-link">Speakers</Link>
                        <Link to='/sponsors' className="hero-list-link">Sponsors</Link>
                        <Link to='/team' className="hero-list-link">Core Team</Link>
                        <Link to='/hackathon' className="hero-list-link">Events </Link>
                        <Link to='/theme' className="hero-list-link">Theme </Link>


                        
                        
                        
                        
                    </ul>
                </nav>

                <div className="main-page-content">
                    {/* <h1>Sand<span className="stone">Stone</span></h1> */}
                    <h1>SANDSTONE</h1>
                    <h2>India Accelerates: Canvassing Vicennial Sustainability</h2>

                    <div className="group">
                        <h4><FaMapPin color="red" /> IIT Jodhpur</h4>
                        <h4><FaCalendar color="#4284FF"/> 23rd-25th September</h4>
                    </div>
                    <div className="group-button">
                        <a href="#" target="_blank"><button className="btn-grad"> Enter Platform </button></a>
                        <a href="https://drive.google.com/drive/folders/1bIoM51tgU38RH70jL99f1MOY7REhusiQ"target="_blank"><button className="btn-grad"> <FaPlayCircle/> Theme Reveal </button></a>
                    </div>
                    
                </div>
                

            </div>
        </div>
    )
 
}