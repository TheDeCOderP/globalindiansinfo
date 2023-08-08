// pages/index.js
import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
};

About.layout = 'other';

export default About;
