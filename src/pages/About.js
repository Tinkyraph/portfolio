import React, { useState } from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div className='about'>
        <Logo />
        <Navigation />
        <h1>About</h1>
        </div>
    );
};

export default About;