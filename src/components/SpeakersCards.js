import React from 'react';

function SpeakersCards(props) {
  return (
    <div className='speakers-cards-main'>
        <div className='speakers-cards-image'>
            <img src={props.image} />
        </div>
        
        <div className='speakers-cards-content'>
            <p className='name'>{props.name}</p>
            <p className='company'>{props.company}</p>
            <p className='designation'>{props.designation}</p>
            
        </div>
    </div>
  )
}

export default SpeakersCards;