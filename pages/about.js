// pages/index.js
import React from 'react';
import Link from 'next/link';
import AboutUs from '../components/about/index';

const About = () => {
  return (
    <div>
     <AboutUs/>
    </div>
  );
};

About.layout = 'other';

export default About;
