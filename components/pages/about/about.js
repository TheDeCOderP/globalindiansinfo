import React from 'react';
import { FaLinkedin, FaBullseye, FaTasks, FaGlobe } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
const WhatweOffer = [
  
         {
        "id": 1,
        "title": "Knowledge",
        "description": "Stay informed and empowered with the latest news, articles, and insights on all things related to global opportunities.",
        "imagePath": "uploads/images/about/knowledge.jpg",
        "link":"/events"
      },
      {
        "id": 2,
        "title": "Education",
        "description": "Discover a world of educational possibilities with our guidance on studying abroad, scholarships, and career development.",
        "imagePath": "uploads/images/about/education.jpg",
        "link":"/education"
      },
      {
        "id": 3,
        "title": "Jobs",
        "description": "Explore the international job market with confidence, from job search tips to career advice.",
        "imagePath": "uploads/images/about/jobs.jpg",
        "link":"/jobs"
      },
      {
        "id": 4,
        "title": "Business",
        "description": "Explore the global business landscape with strategies, success stories, and resources to help you expand your ventures.",
        "imagePath": "uploads/images/about/business.jpg",
        "link":"/business"
      },
      {
        "id": 5,
        "title": "Travel",
        "description": "Satiate your wanderlust with travel guides, tips, and personal stories from fellow global Indians.",
        "imagePath": "uploads/images/about/travel.jpg",
        "link":"/travel"
      },
      
      {
        "id": 6,
        "title": "Blogs",
        "description": "Explore a diverse range of thought-provoking blogs, covering a wide array of topics related to our global journey.",
        "imagePath": "uploads/images/about/blogs.jpg",
        "link":"/blogs"
      }
    
  
  
]

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
                    <Image src="/uploads/images/founders/pk2.jpeg" alt="founder" width={500} height={500}></Image>
                    <div className="founders_social">
                <a href="https://www.linkedin.com/in/pratyushk/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="linkedin-icon" size={30} />Visit Linkedin
                </a>
                <a href="https://www.pratyushkumar.co.uk/" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="linkedin-icon" size={30} /> Visit Website
                  </a></div></div></div>
                <div className="founders_column col-lg-6 col-md-6">
                <div className="founders">
                <Image src="/uploads/images/founders/bidisha-ray.jpg" alt="founder1" width={500} height={500}></Image>
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
      <div className="container">
        <div className="row">
          {
            WhatweOffer.map((item)=>(
            
                <div className="col-sm-12 col-md-4 col-lg-4 mb-4" key={item.id}>
                  <Link href={item.link}>
                  <div className="image">
                    <Image src={`/${item.imagePath}`} width={400} height={300} className="aspect-ratio" alt="what-we-offer"></Image>
                </div>
                <div className="body text-dark">
                  <h4 className="text-center">{item.title}</h4>
                  <p>{item.description}</p>
                  </div>
                  </Link>
                  </div>

              )
            )
          
          }
        
        </div>
      </div>
      
    </section>
  );
};

export default AboutUs;
