import React from "react";
import "animate.css/animate.min.css";

import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Theme() {
    return (
        <div className="theme-list">
            <ul>
                <li>
                    <img src={require('./images/Themes/Diversity.png')} alt="diversity" width="100%"/>
                    <div className="theme-list-content">
                        <h4>Diversity and Inclusion for Sustainable Careers</h4>
                        <p>Diversity contributes to bringing innovation and creativity. Embracing diversity and valuing everyone in the organizations is the foundation for achieving Inclusion.</p>
                    </div>
                    
                </li>
                <li>
                    <img src={require('./images/Themes/The Changing face of Unconscious Bias intervention.png')} alt="diversity" width="100%"/>
                    <h4>The Changing face of Unconscious Bias intervention: Techno Business</h4>
                    <p>Roles Unconscious bias are the shortcuts that our brain takes implicitly to make judgements about the people around us and it can have significant influence on our activities.  Therefore, it is necessary to create awareness about this behaviour and attitude.</p>
                </li>

                <li>
                    <img src={require('./images/Themes/Democratic.png')} alt="diversity" width="100%"/>
                    <h4>Democratic clean business through next gen solutions</h4>
                    <p>Democratic clean business is about making a choice to adopt cleaner practices in business. Embracing the new age technology to combat the ill effects of advancements in today’s world. </p>
                </li>

                <li>
                    <img src={require('./images/Themes/Business Antidote.png')} alt="diversity" width="100%"/>
                    <h4>Business Antidote</h4>
                    <p>The strife of businesses and industries towards growth and success has taken its toll on our beloved earth. Hence it is of paramount importance that in the coming years we adopt sustainable business practices that will help heal the world and make it a better place for our future generations.</p>
                </li>
            </ul>
        </div>
    )
}