import React from 'react';
import { FaLinkedin, FaBullseye, FaTasks, FaGlobe } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="about-us">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={12}>
            <div className="content">
              <Row>
                <Col md={6} className="text-center feature-col">
                  <div className="mission-vision">
                  <div className="feature-icon">
                    <FaBullseye />
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    Our vision is to bring the Global Indian Community together and to keep India’s culture and heritage alive across the world following the principle of Vasudev Kutumbkam (The Whole World Is Our Family).
                  </p>
                  </div>
                </Col>
                <Col md={6} className="text-center feature-col">
                <div className="mission-vision">
                  <div className="feature-icon">
                    <FaTasks />
                  </div>
          
                  <h3>Our Mission</h3>
                  <p>
                    Developing a vibrant and user-friendly platform that acts as a single source of all relevant information needed by the Indians on the move. Bringing Indians together to help each other by networking.
                  </p>
                  </div>
                </Col>
              </Row>
              <h1 className='py-4'>Founders</h1>
              <p>
                Our founders, Pratyush Kumar and Bidisha Ray come from New Delhi and are currently based in London. They have traveled, worked, and lived in 12+ countries and fully understand the needs of the ever-growing Indian community. This website is their endeavor to help the Global Indian Community with relevant and timely information.
              </p>
              <div className="founder-icons row py-4">
                <div className="founders_column col-lg-6 col-md-6">
                  <div className="founders">
                    <Image src="/uploads/images/founders/pk1.jpg" width={500} height={500}></Image>
                    <div className="founders_social">
                <a href="https://www.linkedin.com/in/pratyushk/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="linkedin-icon" size={30} />Visit Linkedin
                </a>
                <a href="https://www.pratyushkumar.co.uk/" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="linkedin-icon" size={30} /> Visit Website
                  </a></div></div></div>
                <div className="founders_column col-lg-6 col-md-6">
                <div className="founders">
                <Image src="/uploads/images/founders/bidisha-ray.jpg" width={500} height={500}></Image>
                    <div className="founders_social">
                <a href="https://www.linkedin.com/in/bidisharay/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="linkedin-icon" size={30} />Visit Linkedin
                  </a>
                <a href="https://bidisharay.com/" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="linkedin-icon" size={30} /> Visit Website
                  </a>
                </div>
                </div>
                </div>
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};

export default AboutUs;
