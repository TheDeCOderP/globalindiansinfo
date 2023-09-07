import React from 'react';
import Image from "next/image";
import Link from "next/link";
import TechArticle from '@/components/pages/articles/categories/tech'


import { Container, Row, Col } from 'react-bootstrap';
const Tech = () => {
  
 

    return (
        <section className="section">
         <div className="row">
         <div className="col-md-12">
            <p className="text-center"><b> Welcome to the Technology Connect Page for the vibrant and diverse Indian Diaspora spread across the globe. Explore the fusion of cutting-edge innovation and our rich cultural heritage. Stay updated on tech trends, job opportunities, and cultural preservation. Join us on this digital journey that connects the world while celebrating our roots.</b>
</p>
        </div>
      </div>
   

    <div className='tech'>
      <Row>
        <Col md={12}>
          <h1 className='text-center'>Stay Informed</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Link href="/news">
        <Image
          src='/uploads/images/jobs/t1.jpg'
          alt="Partner with Us"
          width={500} height={500}
          className="aspect-ratio cover"
        />
          <h3 >News and Updates</h3>
          < p className="text-dark">
            Stay up-to-date with the latest tech trends and developments in India. Our news section covers everything from emerging startups to government initiatives, ensuring you're well-informed about the tech landscape in the homeland.
          </p>
          </Link>
        </Col>
        <Col md={6}>
        <Link href="/technology">
        <Image
          src='/uploads/images/jobs/t2.jpeg'
          alt="Partner with Us"
          width={500} height={500}
          className="aspect-ratio cover "
        />
          <h3>Tech Blogs</h3>
        
      
     
          <p className="text-dark">
            Dive deep into tech topics that matter to you. Explore thought-provoking articles on subjects like artificial intelligence, blockchain, and e-commerce, all written with the Indian diaspora in mind.
          </p>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h1 className='text-center'>Opportunities</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
        <Image
          src='/uploads/images/jobs/t3.jpeg'
          alt="Partner with Us"
          width={500} height={500}
          className="aspect-ratio cover "
        />
          <h3>Tech Jobs</h3>
          <p>
            Are you seeking career opportunities in the tech sector? Browse through our job listings to find exciting openings in India, the United States, Canada, the United Kingdom, and other countries with significant Indian communities.
          </p>
        </Col>
        <Col md={6}>
        <Image
          src='/uploads/images/jobs/t5.jpeg'
          alt="Partner with Us"
          width={500} height={500}
          className="aspect-ratio cover "
        />
          <h3>Entrepreneurial Resources</h3>
          <p>
            If you're an aspiring entrepreneur, discover resources to help you turn your tech startup dreams into reality. Explore funding options, mentorship programs, and success stories from fellow Indian diaspora entrepreneurs.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h1 className='text-center'>Cultural Preservation</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
        <Image
          src='/uploads/images/jobs/t6.jpeg'
          alt="Partner with Us"
          width={500} height={500}
          className="aspect-ratio cover"
        />
          <h3>Language and Culture Apps</h3>
          <p>
            Embrace and preserve your cultural heritage through language learning and cultural appreciation apps. We recommend a curated list of apps that can help you and your children stay connected to your roots.
          </p>
        </Col>
        <Col md={6}>
        <Image
          src='/uploads/images/jobs/t7.jpeg'
          alt="Partner with Us"
          width={500} height={500}
          className="aspect-ratio cover"
        />
          <h3>Virtual Festivals</h3>
          <p>
            Can't make it home for Diwali or Holi? We've got you covered with virtual celebrations and tips on how to make these cultural festivals feel like home, no matter where you are.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h1 className='text-center' >Tech for Good</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
        <Image
          src='/uploads/images/jobs/t8.jpeg'
          alt="Partner with Us"
          width={500} height={500}
          className="aspect-ratio cover"
        />

          <h3>Social Impact Initiatives</h3>
          <p>
            Learn about tech-driven initiatives aimed at making a positive impact in India and beyond. Discover how you can contribute to projects related to education, healthcare, and sustainability.
          </p>
        </Col>
        <Col md={6}>
        <Image
          src='/uploads/images/jobs/t10.jpg'
          alt="Partner with Us"
          width={500} height={500}
          className="aspect-ratio cover"
        />
          <h3 >Volunteer Opportunities</h3>
          <p>
            Find opportunities to give back to your homeland or local community through technology-related volunteer work. Your skills can make a significant difference in the lives of those in need.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h1 className='text-center'>Community Building</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
        <Image
          src='/uploads/images/jobs/t11.jpeg'
          alt="Partner with Us"
          width={500} height={500}
          className="aspect-ratio cover"
        />
          <h3>Forums and Discussion Boards</h3>
          <p>
            Connect with fellow members of the Indian diaspora who share your tech interests. Discuss the latest gadgets, programming languages, and more.
          </p>
        </Col>
        <Col md={6}>
        <Image
          src='/uploads/images/jobs/t12.jpg'
          alt="Partner with Us"
          width={500} height={500}
          className="aspect-ratio cover"
        />
          <h3>Events and Webinars</h3>
          <p>
            Stay connected with the Indian diaspora tech community through online events, webinars, and conferences. Network with like-minded individuals and industry experts.
          </p>
        </Col>
      </Row>
    </div>

    <TechArticle/>
 
  
      </section>
      
    )
}

Tech.layout = "other";
export default Tech;