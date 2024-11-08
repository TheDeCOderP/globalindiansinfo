// pages/index.js
import React from 'react';
import AboutUs from '../components/pages/about/about';

const About = () => {
  return (
    <div className='container'>
     <AboutUs/>
    </div>
  );
};

About.layout = 'other';

export default About;
