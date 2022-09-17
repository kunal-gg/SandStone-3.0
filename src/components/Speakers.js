import React from 'react'
import { sandstone } from './Sandstone3'
import SpeakersCards from './SpeakersCards'
import { speakers } from './SpeakersData'

import { AnimationOnScroll } from 'react-animation-on-scroll'

function Speakers() {
        return (
                <div className='speakers-container'>
                        <div className='speakers-heading'>
                                {/* <h2>Our Eminent Speakers Of <br /><span>Industry Professionals</span></h2> */}
                                <h2>Our Eminent <br /><span>Speakers</span></h2>

                        </div>
                        

                        <div className='speakers-main' id='current-speakers'>

                                {sandstone.map(item => {

                                        return (
                                                <>
                                                <AnimationOnScroll animateIn='animate__fadeIn'
                                                animateOnce='true'>
                                                <SpeakersCards
                                                                image={item.image}
                                                                name={item.name}
                                                                designation={item.designation}
                                                                company={item.company}
                                                        />
                                                </AnimationOnScroll>
                                                      
                                                </>
                                        )
                                })}
                        </div>

                        <div className='previous-speakers-heading'>
                                <h1 id='previous-speakers'>Previous <span>Speakers</span></h1>
                        </div>


                        <div className='speakers-main' >

                                {speakers.map(item => {

                                        return (
                                                <>
                                                 <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true'>
                                                 <SpeakersCards
                                                                image={item.image}
                                                                name={item.name}
                                                                designation={item.designation}
                                                                company={item.company}
                                                        />
                                                 </AnimationOnScroll>
                                                     
                                                </>
                                        )
                                })}
                        </div>

                </div>
        )
}

export default Speakers