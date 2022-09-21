import React from "react";
import Card from "./CoreTeamCards";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function CoreTeam() {
  return (
    <div className="core-team-main">
      <div className="core-team-heading">
        <h2>Our <span>Team</span></h2>
        <p>The team that has put their heart and soul into this event</p>
      </div>


      <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce='true'>
        
      <h1 className="departments">Core Team</h1>
        <div className="core-team-grid">
     

          <Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Dr. Anuj Pal Kapoor'
            POR='CHAIRPERSON'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />
          <Card
            image={require('./images/Dr. Tanmoy Kundu.jpeg')}
            name='Dr Tanmoy Kundu'
            nothing='Assistant Professor'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card
            image={require('./images/Dr. Monika Tanwar.jpeg')}
            name='Dr. Monika Tanwar'
            nothing='Assistant Professor'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card
            image={require('./images/Puneet Sir Edited.png')}
            name='Puneet Garg'
            nothing='CDC'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card
            image={require('./images/Gurpreet Maam Final.png')}
            name='Gurpreet Kaur Virdi'
            nothing='CDC'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />


          <Card
            image={require('./images/Neeraj Pachar.png')}
            name='Neeraj Pachar'
            nothing='SENIOR MANAGER'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card
            image={require('./images/Aman Prakash.png')}
            name='Aman Prakash'
            nothing='GENERAL SECRETARY-SS'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />


          <Card
            image={require('./images/Manav Kapoor.jpg')}
            name='Manav Kapoor'
            nothing='GENERAL SECRETARY - ACAC'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card
            image={require('./images/Jeevesh Jain.png')}
            name='Jeevesh Jain'
            nothing='VICE PRESIDENT OF BCD'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card
            image={require('./images/Paridhi Mathur.png')}
            name='Paridhi Mathur'
            nothing='SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />



          <Card
            image={require('./images/Aviral Aggarwal.png')}
            name='Aviral Aggarwal'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />
          <Card

            image={require('./images/Aayush Sharma.jpeg')}
            name='Ayush Sharma'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />
          <Card
            image={require('./images/Devanshi Grover.png')}
            name='Devanshi Grover'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'

          />



          <Card
            image={require('./images/Madhumay Bhartiya.png')}
            name='Madhumay Bhartiya'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum'
          />



          <Card
            image={require('./images/Mayank Sharma.png')}
            name='Mayank Sharma'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card
            image={require('./images/Prodorshika Ghosh.png')}
            name='Prodorshika Ghosh'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />
          <Card

            image={require('./images/Vanshika Bansal.png')}
            name='Vanshika Bansal'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card

            image={require('./images/Rahul.JPG')}
            name='Rahul'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card

            image={require('./images/Abhishek Srivastav.JPG')}
            name='Abhishek Srivastav'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card

            image={require('./images/Aniruddha Parikshit Bhadke.jpg')}
            name='Aniruddha Bhadke'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card

            image={require('./images/Anupama Banerjee.jpg')}
            name='Anupama Banerjee'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />


          <Card

            image={require('./images/Arjun Saseendran.jpg')}
            name='Arjun Saseendran'
            nothing='JOINT SECRETARY'
            description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

          <Card

          image={require('./images/Sumanth S.jpeg')}
          name='Sumanth S'
          nothing='JOINT SECRETARY'
          description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />          
          <Card

          image={require('./images/Sweta Satish.jpg')}
          name='Sweta Satish'
          nothing='JOINT SECRETARY'
          description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />          
          <Card

          image={require('./images/Vidyotma.JPG')}
          name='Vidyotma'
          nothing='JOINT SECRETARY'
          description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
          />

        </div>

        <h2 className = 'departments'>Web Development and Video Design</h2>
        <div className="core-team-grid">
        <Card
            image={require('./images/Pranav Goswami.jpeg')}
            name='Pranav Goswami'
            POR='Head'
            description='Web Development and Video Design'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Aditya Anand'
            POR='Assistant Head'
            description='Web Development and Video Design'
          />
<Card
            image={require('./images/Kunal Tiwari.jpeg')}
            name='Kunal Tiwari'
            POR='Assistant Head'
            description='Web Development and Video Design'
          />
        </div>


<h2 className = 'departments'>Travel and Accommodation</h2>
<div className="core-team-grid">
<Card
            image={require('./images/Himansh Mittal.jpeg')}
            name='Himansh Mittal'
            POR='Head'
            description='Travel and Accommodation'
          />
<Card
            image={require('./images/Shashank Saraswat.jpeg')}
            name='Shashank Saraswat'
            POR='Head'
            description='Travel and Accommodation'
          />
<Card
            image={require('./images/Avinash Kumar.jpeg')}
            name='Avinash Kumar'
            POR='Assistant Head'
            description='Travel and Accommodation'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Divyanshu Gupta'
            POR='Assistant Head'
            description='Travel and Accommodation'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Shubham Kumar'
            POR='Assistant Head'
            description='Travel and Accommodation'
          />

</div>


<h2 className = 'departments'>Resources</h2>
<div className="core-team-grid">
<Card
            image={require('./images/Samyak Bafna.JPG')}
            name='Samyak Bafna'
            POR='Head'
            description='Resources'
          />
<Card
            image={require('./images/Viraj.jpg')}
            name='Viraj Jagdale'
            POR='Head'
            description='Resources'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Anushka Jat'
            POR='Assistant Head'
            description='Resources'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Ashudeep Dubey'
            POR='Assistant Head'
            description='Resources'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Harender Pal Singh'
            POR='Assistant Head'
            description='Resources'
          />
</div>


<h2 className = 'departments'>Marketing</h2>
<div className="core-team-grid">
<Card
            image={require('./images/Anjali Agarwal.jpeg')}
            name='Anjali Agarwal'
            POR='Head'
            description='Marketing'
          />
<Card
            image={require('./images/Tanmay Gupta.jpeg')}
            name='Tanmay Gupta'
            POR='Head'
            description='Marketing'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Praveen Kumar'
            POR='Assistant Head'
            description='Marketing'
          />
<Card
            image={require('./images/Saksham Verma.png')}
            name='Saksham Verma'
            POR='Assistant Head'
            description='Marketing'
          />
<Card
            image={require('./images/Swapnil Shimpi.jpg')}
            name='Swapnil Shimpi'
            POR='Assistant Head'
            description='Marketing'
          />

</div>

<h2 className = 'departments'>Informals</h2>
<div className='core-team-grid'>
<Card
            image={require('./images/Ayush Sisodia.jpg')}
            name='Ayush Sisodia'
            POR='Head'
            description='Informals'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Hitesh Bansal'
            POR='Head-Unstop'
            description='Informals'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Ajay Kumar'
            POR='Assistant Head'
            description='Informals'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Ankit Mehta'
            POR='Assistant Head'
            description='Informals'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Rajneesh Tiwari'
            POR='Assistant Head'
            description='Informals'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Shreshth Vatsal Sharma'
            POR='Assistant Head'
            description='Informals'
          />

</div>

<h2 className = 'departments'>Guest Relations</h2>
<div className="core-team-grid">
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='S.S. Srinidhi'
            POR='Head'
            description='Guest Relations'
          />
<Card
            image={require('./images/Vishal Gupta.jpg')}
            name='Vishal Gupta'
            POR='Head'
            description='Guest Relations'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Ankit Dwivedi'
            POR='Assistant Head'
            description='Guest Relations'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Anurag Verma'
            POR='Assistant Head'
            description='Guest Relations'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Manasi Dubey'
            POR='Assistant Head'
            description='Guest Relations'
          />
  </div>
<h2 className="departments">Digital Design</h2>        
<div className="core-team-grid">
<Card
            image={require('./images/Deepak Baghel.png')}
            name='Deepak Baghel'
            POR='Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Lavanya Dahiya'
            POR='Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Akriti Gupta'
            POR='Assistant Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Chaitravi Kane'
            POR='Assistant Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Manoj Khichar'
            POR='Assistant Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Niharika Dadu'
            POR='Assistant Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Prakhar Bisen'
            POR='Assistant Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Pravesh Garg'
            POR='Assistant Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Rishav Aich'
            POR='Assistant Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Saloni Garg'
            POR='Assistant Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Saman Aijaz Siddiqui'
            POR='Assistant Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Shanmukh Dharavath.jpeg')}
            name='Shanmukh Dharavath'
            POR='Assistant Head'
            description='Digital Design'
          />
<Card
            image={require('./images/Mohit Singh.jpeg')}
            name='Mohit Singh'
            POR='Assistant Head'
            description='Digital Design'
          />
</div>






      </AnimationOnScroll>




    </div>
  )
}