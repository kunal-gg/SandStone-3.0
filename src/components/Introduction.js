import React from "react";
import "animate.css/animate.min.css";

import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Introduction() {
    return (
        <div className="introduction-container">
            
                <div className="introduction-main">
                
                    <div className="introduction-left-section">
                        
                    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce='true'>
                        <h1>India Accelerates:<br />  Canvassing Vicennial Sustainability</h1>
                        <p>
                            Sandstone signifies cohesiveness- a strong and evolving structure symbolizing growth and improvement. As the world is slowly freeing itself from the forceful clutches of the pandemic and clambering on stable grounds, we cannot ignore the rapid magnifications of every existing inequality caused by our recent plight which did not spare the corporate world. Staying true to its name, the SandStone summit boasts of four dynamic verticals, Impressario, HR Shastra, Praesidium, and the Eleutheria series and with the main aim of Evolving into the new age of Business. The summit ensures substantial interaction of the young minds with the figureheads of the corporate world and serves as a reminder that small changes can mold and shape them into future business leaders.
                        </p>
                    </AnimationOnScroll>

                    </div>

                
                    <div className="introduction-right-section">
                        {/* <AnimationOnScroll animateIn="animate__slideInRight "> */}
                            {/* <img src={require('./images/Homepage/hero.png')} width='90%' /> */}
                        {/* </AnimationOnScroll> */}
                    </div>
                


                </div>
            
        </div>
    )
}