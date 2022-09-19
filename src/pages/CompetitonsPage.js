import React from "react";
import AnotherCompetitions from "../components/AnotherCompetitionsPage";
import Competitions from "../components/Competitions";
import Header from "../components/Header";
import NewHeader from "../components/NewHeader";
export default function CompetitionsPage(){
    return(
        <>
        <NewHeader/>
        <h1 className="fuck-off-sme2">Sandstone <span>Verticals</span></h1>
        <Competitions />
        <AnotherCompetitions />
        
        
        </>
    )
}