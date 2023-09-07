import React from "react";
import { FaLinkedin, FaBullseye, FaTasks, FaGlobe } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const WhatweOffer = [
    {
      id: 1,
      title: "Knowledge",
      description:
        "Stay informed and empowered with the latest news, articles, and insights on all things related to global opportunities.",
      imagePath: "uploads/images/about/knowledge.jpg",
      link: "/events",
    },
    {
      id: 2,
      title: "Education",
      description:
        "Discover a world of educational possibilities with our guidance on studying abroad, scholarships, and career development.",
      imagePath: "uploads/images/about/education.jpg",
      link: "/education",
    },
    {
      id: 3,
      title: "Jobs",
      description:
        "Explore the international job market with confidence, from job search tips to career advice.",
      imagePath: "uploads/images/about/jobs.jpg",
      link: "/jobs",
    },
    {
      id: 4,
      title: "Business",
      description:
        "Explore the global business landscape with strategies, success stories, and resources to help you expand your ventures.",
      imagePath: "uploads/images/about/business.jpg",
      link: "/business",
    },
    {
      id: 5,
      title: "Travel",
      description:
        "Satiate your wanderlust with travel guides, tips, and personal stories from fellow global Indians.",
      imagePath: "uploads/images/about/travel.jpg",
      link: "/travel",
    },

    {
      id: 6,
      title: "Blogs",
      description:
        "Explore a diverse range of thought-provoking blogs, covering a wide array of topics related to our global journey.",
      imagePath: "uploads/images/about/blogs.jpg",
      link: "/blogs",
    },
  ];

  return (
    <section className="about-us">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={12}>
            <div className="content">
              <Row>
                <Col md={6} className="text-center feature-col">
                  <div className="mission-vision">
                    <Image
                      src="/uploads/images/jobs/photo.jpeg"
                      alt="founder"
                      width={500}
                      height={500}
                    ></Image>
                  </div>
                </Col>
                <Col md={6} className="text-center feature-col">
                  <div className="mission-vision">
                    <div className="feature-icon">
                      <FaTasks />
                    </div>
                    <h3>Our Vision</h3>
                    <p>
                      Empowering the Global Indian Community to Thrive Together
                    </p>
                    <div className="feature-icon">
                      <FaBullseye />
                    </div>
                    <h3>Our Mission</h3>
                    <p>
                      Our mission is to unite the Global Indian Community,
                      preserving and celebrating India's rich culture and
                      heritage on a global canvas, guided by the timeless
                      principle of Vasudev Kutumbkam (The Whole World Is Our
                      Family). We aim to create an interactive and user-friendly
                      platform that serves as the ultimate hub for all essential
                      information needed by today's mobile Indians. Our goal is
                      to foster a strong sense of community among Indians,
                      facilitating mutual support, networking, and a profound
                      connection that transcends borders.
                    </p>
                  </div>
                </Col>
              </Row>
              <h1 className="py-4 pt-12">Founders</h1>
              <p>
                Our founders, Pratyush Kumar and Bidisha Ray, originally hailing
                from New Delhi, now call London their home. Having traversed,
                worked, and resided in over 12 countries, they possess a deep
                understanding of the evolving requirements of the continually
                expanding Indian diaspora. This website represents their
                commitment to assisting the Global Indian Community by providing
                pertinent and up-to-the-minute information.
              </p>

              <div className="founder-icons row py-4">
                <div className="founders_column col-lg-6 col-md-6">
                  <div className="founders">
                    <Image
                      src="/uploads/images/founders/pk2.jpeg"
                      alt="founder"
                      width={500}
                      height={500}
                    ></Image>

                    <div className="founders_social">
                      <a
                        href="https://www.linkedin.com/in/pratyushk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="linkedin-icon" size={30} />
                        Visit Linkedin
                      </a>
                      <a
                        href="https://www.pratyushkumar.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe className="linkedin-icon" size={30} /> Visit
                        Website
                      </a>
                    </div>
                  </div>
                </div>
                <div className="founders_column col-lg-6 col-md-6">
                  <div className="founders">
                  <h1 className="py-4">Pratyush Kumar</h1>
                    <p>
                     
                      Pratyush Kumar, a seasoned globetrotter and corporate
                      professional with over two decades of experience, is on a
                      remarkable mission. His passport bears witness to
                      adventures across ten diverse countries, where he's
                      embraced diverse cultures and breathtaking landscapes.
                      Beyond his corporate accomplishments, Pratyush's
                      compassionate spirit shines through his founding of a
                      non-profit dedicated to empowering marginalized children.
                      Based in London, Pratyush excels in IT solutions, digital
                      marketing, and HR solutions. With a diverse background,
                      including leadership roles at HSBC and S&P Global, he
                      brings 22+ years of global corporate experience. He serves
                      as a guiding force for numerous startups and small
                      businesses, nurturing their path to unstoppable growth.
                      Moreover, he's embarked on initiatives to assist thousands
                      of jobseekers and students, amplifying his positive impact
                      in the global community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="founder-icons row py-4">
                <div className="founders_column col-lg-6 col-md-6">
                  <div className="founders">
                  <h1 className="py-4">Bidisha Ray</h1>
                    <p>
                    
                      Bidisha Ray is a seasoned professional with expertise in
                      resume writing, resume review, and mock interviews and
                      career counselling. Fluent in English, Hindi, Mandarin,
                      Bengali, and Marathi, she holds certifications in
                      leadership excellence and Six Sigma Green Belt. Based in
                      London, Bidisha offers comprehensive resume assessments
                      and LinkedIn profile enhancements. With a diverse
                      background spanning HR consulting, talent acquisition,
                      business development, and project management, she brings a
                      wealth of experience to help clients achieve their career
                      goals. She has held leadership roles at BT, MetLife, JP
                      Morgan Chase, and Wipro. Bidisha holds an M.Phil. in
                      International Economics.
                    </p>
                  </div>
                </div>
                <div className="founders_column col-lg-6 col-md-6">
                  <div className="founders">
                    <Image
                      src="/uploads/images/founders/bidisha-ray.jpg"
                      alt="founder1"
                      width={500}
                      height={500}
                    ></Image>
                    <div className="founders_social">
                      <a
                        href="https://www.linkedin.com/in/bidisharay/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="linkedin-icon" size={30} />
                        Visit Linkedin
                      </a>
                      <a
                        href="https://bidisharay.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe className="linkedin-icon" size={30} /> Visit
                        Website
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
          {WhatweOffer.map((item) => (
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4" key={item.id}>
              <Link href={item.link}>
                <div className="image">
                  <Image
                    src={`/${item.imagePath}`}
                    width={400}
                    height={300}
                    className="aspect-ratio"
                    alt="what-we-offer"
                  ></Image>
                </div>
                <div className="body text-dark">
                  <h4 className="text-center">{item.title}</h4>
                  <p className="text-center">{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
