import React from "react";
import ReactPlayer from "react-player";


export default function Message(){
    return(
        <div className="message-main">
            <h1 className="message-heading">Dignitaries' Message</h1>
            <div className="message-container">
                <div className="message-video">
                <ReactPlayer width="30vw" height="40vh" url='https://youtu.be/dEIqGgSqlsw ' />
                </div>
                <div className="message-video">
                <ReactPlayer width="30vw" height="40vh" url='https://youtu.be/82vtil1U4-M ' />
                </div>
            </div>

        </div>


    )
}