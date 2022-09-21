import React from "react";
import Amex from "../components/Amex";
import Header from "../components/Header";
import Sponsors from "../components/Sponsors";
import NewHeader from "../components/NewHeader";
import Services from "../components/services";

export default function SponsorsPage() {
    return (
        <>
            <NewHeader />
            {/* <Sponsors title='Title Sponsor' image1={require('.//images/american-express.jpg')} /> */}
            <Amex />
            <Sponsors title='Associate Partner' image1={require("../components/images/tomar.jpeg")} />

            {/* <Sponsors title='Title Sponsor' image1={require('./images/american-express.jpg')} image2={require('./images/american-express.jpg')}/>
            <Sponsors title='Title Sponsor' image1={require('./images/american-express.jpg')} image2={require('./images/american-express.jpg')}/>
            <Sponsors title='Title Sponsor' image1={require('./images/american-express.jpg')} image2={require('./images/american-express.jpg')}/> */}
            {/* <Sponsors title='Event Partner' image1={require("../components/images/tribe_vibe.jpeg")}/> */}
            <Sponsors title='Entertainment Partner' image1={require("../components/images/emiac.jpeg")} />



            <Services />

        </>

    )
}