import React from "react";
import Amex from "../components/Amex";
import Header from "../components/Header";
import Sponsors from "../components/Sponsors";
import NewHeader from "../components/NewHeader";

export default function SponsorsPage(){
    return(
        <>
        <NewHeader />
            {/* <Sponsors title='Title Sponsor' image1={require('.//images/american-express.jpg')} /> */}
            <Amex />
            {/* <Sponsors title='Title Sponsor' image1={require('./images/american-express.jpg')} image2={require('./images/american-express.jpg')}/>
            <Sponsors title='Title Sponsor' image1={require('./images/american-express.jpg')} image2={require('./images/american-express.jpg')}/>
            <Sponsors title='Title Sponsor' image1={require('./images/american-express.jpg')} image2={require('./images/american-express.jpg')}/> */}
             {/* <Sponsors title='Title Sponsor' image1={require('./images/american-express.jpg')} image2={require('./images/american-express.jpg')}/> */}
        </>

    )
}