import React from 'react';
import { FaLinkedin, FaBullseye, FaTasks } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <section className="about-us">
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="content">
              <Row>
                <Col md={6} className="text-center feature-col mission-vision">
                  <div className="feature-icon">
                    <FaBullseye />
                  </div>
                  <h2>Our Vision</h2>
                  <p>
                    Our vision is to bring the Global Indian Community together and to keep India’s culture and heritage alive across the world following the principle of Vasudev Kutumbkam (The Whole World Is Our Family).
                  </p>
                </Col>
                <Col md={6} className="text-center feature-col mission-vision">
                  <div className="feature-icon">
                    <FaTasks />
                  </div>
                  <h2>Our Mission</h2>
                  <p>
                    Developing a vibrant and user-friendly platform that acts as a single source of all relevant information needed by the Indians on the move. Bringing Indians together to help each other by networking.
                  </p>
                </Col>
              </Row>
              <h2>Founders</h2>
              <p>
                Our founders, Pratyush Kumar and Bidisha Ray come from New Delhi and are currently based in London. They have traveled, worked, and lived in 12+ countries and fully understand the needs of the ever-growing Indian community. This website is their endeavor to help the Global Indian Community with relevant and timely information.
              </p>
              <div className="founder-icons">
                <a href="link_to_pratyush_linkedin" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="linkedin-icon" size={40} />
                </a>
                <a href="link_to_bidisha_linkedin" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="linkedin-icon" size={40} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};

export default AboutUs;
