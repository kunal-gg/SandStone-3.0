import React from "react";
import Events from "../components/Events";
import HomePage from "../components/Homepage";
import Introduction from "../components/Introduction";
import Theme from "../components/Themes";


export default function LandingPage(){
    return(
        <>
            <HomePage />
            <Introduction />
            <Events />
            <Theme />
        </>
    )
}