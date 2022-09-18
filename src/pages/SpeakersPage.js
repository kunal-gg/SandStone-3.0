import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Header from "../components/Header";
import Speakers from "../components/Speakers";
import NewHeader from "../components/NewHeader";

export default function SpeakersPage(){
    return(
        <>
            {/* <Header /> */}
            <NewHeader />
            <Speakers />


        </>
    )
}