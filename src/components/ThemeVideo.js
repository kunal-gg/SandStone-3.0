import React from 'react'
import ReactPlayer from 'react-player'


export default function ThemeVideo() {
    return (
        <div className="theme-video-container">
            <div className="theme-video-main">
                <div className="theme-video-left">
                    <h1>India Accelerates:<br /> <span>Canvassing Vicennial</span> Sustainability</h1>
                    <p>
                        The Sandstone Summit 3.0 is the annual Flagship event of SME IIT Jodhpur which provides the future leaders and entrepreneurs the prefect chance to interact with the flag bearers of the corporate industry. Recognising the importance of corporate exposure for the budding icons of change led to the genesis of the Sandstone Summit. This year, we present the third edition of the Sandstone Summit which gets bigger and better than the last 2 years. Every year the theme of our event focuses on a topic of relevance in the business world, the purpose of which is to educate the students of the current situations which affect the market.
                    </p>
                </div>
                <div className="theme-video-right">
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
            </div>
        </div>
    )
}
