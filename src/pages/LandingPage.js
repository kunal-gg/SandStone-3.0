import React from "react";
import Events from "../components/Events";
import EventsCard from "../components/EventsWithCards";
import HomePage from "../components/Homepage";
import Introduction from "../components/Introduction";
import Slider from "../components/Slider";
import Theme from "../components/Themes";


export default function LandingPage(){
    return(
        <>
            <HomePage />
            <Slider />
          
            <Introduction />
            <Theme />
            {/* <Events /> */}
            {/* <Slider /> */}
            {/* <FootFall /> */}
        </>
    )
}