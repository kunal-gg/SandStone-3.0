import React from "react";
import Card from "./CoreTeamCards";



export default function CoreTeam(){
    return(
        <div className="core-team-main">
            <div className="core-team-heading">
                <h2>Our <span>Team</span></h2>
                <p>The team that has put their heart and soul into this event</p>
            </div>

            <div className="core-team-grid">

            <Card 
                image={require('./images/Anuj Pal Kapoor.png')}
                name='Anuj Pal Kapoor'
                POR='CHAIRPERSON'
                description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
                />

                <Card 
                image={require('./images/Neeraj Pachar.png')}
                name='Neeraj Pachar'
                POR='SENIOR MANAGER'
                description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
                />

                <Card 
                image={require('./images/Paridhi Mathur.png')}
                name='Paridhi Mathur'
                POR='SECRETARY'
                description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
                />

                <Card 
                image={require('./images/Aman Prakash.png')}
                name='Aman Prakash'
                POR='GENERAL SECRETARY-SS'
                description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
                />

                <Card 
                image={require('./images/Aviral Aggarwal.png')}
                name= 'Aviral Aggarwal'
                POR='JOINT SECRETARY'
                description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
                />
                <Card 
                image={require('./images/Devanshi Grover.png')}
                name='Devanshi Grover'
                POR='JOINT SECRETARY'
                description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'

                />

                <Card 
                image={require('./images/Jeevesh Jain.png')}
                name='Jeevesh Jain'
                POR='VICE PRESIDENT OF BCD'
                description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
                />

                <Card 
                  image={require('./images/Madhumay Bhartiya.png')}
                  name='Madhumay Bhartiya'
                  POR='JOINT SECRETARY'
                  description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum'
                />

<Card 
                image={require('./images/Manav Kapoor.png')}
                name='Manav Kapoor'
                POR='GENERAL SECRETARY - ACAC'
                description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
                />

                <Card 
                image={require('./images/Mayank Sharma.png')}
                name='Mayank Sharma'
                POR='JOINT SECRETARY'
                description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
                />
              
                <Card 
                image={require('./images/Prodorshika Ghosh.png')}
                name='Prodorshika Ghosh'
                POR='JOINT SECRETARY'
                description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
                />
                <Card 
                
                image={require('./images/Vanshika Bansal.png')}
                  name='Vanshika Bansal'
                  POR='JOINT SECRETARY'
                  description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
                  />

                <Card 
                
                image={require('./images/Vanshika Bansal.png')}
                  name='Ayush Sharma'
                  POR='JOINT SECRETARY'
                  description='Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum.'
                  />



               

            </div>

        </div>
    )
}