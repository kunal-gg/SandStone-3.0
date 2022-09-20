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
        <div className="core-team-grid">

          <Card
            image={require('./images/Anuj Sir.jpeg')}
            name='Dr. Anuj Pal Kapoor'
            nothing='CHAIRPERSON'
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



      </AnimationOnScroll>




    </div>
  )
}