import React from 'react'
import ReactPlayer from 'react-player'


export default function ThemeVideo() {
    return (
        <div className="theme-video-container">
            <div className="theme-video-main">
                <div className="theme-video-left">
                    <h1>Theme Description Here<br /> <span> ABC</span> XYZ</h1>
                    <p>
                        text over here
                    </p>
                </div>
                <div className="theme-video-right">
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
            </div>
        </div>
    )
}
