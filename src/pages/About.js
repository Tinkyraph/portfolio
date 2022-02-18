import React, { useState } from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div className='about'>
        <Logo />
        <Navigation />
        <div className="box_me">
        <h1 class="title_me">
        Je suis Raphaël "Tinkyraph", 
        <br></br>un developer qui habite en 
        <br></br>Belgique.
        </h1>
          <br></br>
           <p className="descrip_me">
           Lorem ipsum dolor sit amet, consectetur adipiscing 
           elit, sed do eiusmod tempor incididunt ut labore et 
           dolore magna aliqua. Ut enim ad minim veniam, quis 
           nostrud exercitation ullamco laboris nisi ut aliquip 
           ex ea commodo consequat. Duis aute irure dolor in 
           reprehenderit in voluptate velit esse cillum dolore 
           eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
           non proident, sunt in culpa qui officia deserunt mollit 
           anim id est laborum.
           </p>
           <div className="picture_me">
          
          </div>
          <div className="time_work">
        
          </div>
          <div className="inspiration_du_moment">
            
          </div>
      </div>
        </div>
    );
};

export default About;