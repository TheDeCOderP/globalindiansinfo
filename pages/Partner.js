import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import {MdOutlineContactPhone,GoGoal } from "react-icons/md";
import{GiStairsGoal}from "react-icons/gi"
import Image from "next/image";
const BenefitItem = ({ title, description, image }) => (
  
  <div className="benefit-item text-center mb-4">
    <Image src={image} alt={title} width={300} height={300} className="aspect-ratio" />
   <div className="body">
    <h3 className="one-line-heading">{title}</h3>
    <p className="text-center">{description}</p>
  </div></div>
 
);
const Partner = () => {
  const benefits = [
    {
      title: "Targeted Reach",
      description:
        "Reach a highly focused audience of Indian expats actively seeking services and products that align with their preferences and requirements.",
      image:'/uploads/images/partner/target reach.jpg', 
    },
    {
      title: "Cultural Alignment",
      description:
        "Connect with your audience on a deeper level by understanding and acknowledging their cultural nuances and preferences. ",
      image:'/uploads/images/partner/culture alignment.jpeg', 
    },
    {
      title: "Expanded Brand Presence",
      description:
        " Elevate your brand visibility on a platform that resonates with the Indian expat community, fostering brand loyalty and recognition.",
      image:'/uploads/images/partner/brand.jpg', 
    },
    {
      title: "Tailored Engagement",
      description:
        "Tailor your offerings to the specific needs and interests of Indian expats, positioning your business as a reliable and relatable choice.",
      image:'/uploads/images/partner/Engagement.jpg', 
    },
    {
      title: "Diverse Advertising Formats",
      description:
        "Choose from a range of advertising formats such as banners, articles, and featured listings to showcase your services and products effectively.",
      image:'/uploads/images/partner/advertising.jpeg', 
    },
    {
      title: "Expats Experiences",
      description:
      "Dive into stories shared by Indian expats who have benefited from our services. Their journey highlights our dedication to catering to their unique needs and fostering a seamless transition.",
      image:'/uploads/images/partner/ab.jpg', 
    },
   
  ];

  return (
    <>
      <div className="section container bg-fafafa pt-3">
        <h2 className="text-center">
          Unlock New Opportunities: Reach Indian Expats with Your Services on 
          <a href="https://www.globalindiansinfo.com"> GlobalIndiansInfo.com</a>
        </h2>
        <p>
          <b>Dear Esteemed Business Owners,</b>
          <br />
          We trust this message finds you well. We are excited to introduce you
          to an exceptional opportunity that holds immense potential for
          expanding your business reach and connecting with a thriving audience.
          At Global Indians Info., we understand the importance of tapping into
          diverse markets and creating meaningful connections. Today, we present
          you with an avenue to do just that—by advertising your services and
          products directly to Indian expats through the platform of 
          {" "}
          <a
            href="https://www.globalindiansinfo.com"
            style={{ color: "blue", textDecoration: "none" }}
          >
            GlobalIndiansInfo.com
          </a>
        </p>
      </div>
      <div>
        <div className="section container my-2">
  <div className="row">
    <div className="col-md-6">
      <div className="text-box">
        <h2>
          About{" "}
          <a
            href="https://www.globalindiansinfo.com"
            className="orange-link"
          >
            GlobalIndiansInfo.com
          </a>
        </h2>
        <p>
          GlobalIndiansInfo.com stands as a hub that bridges the gap
          between Indian expatriates and their homeland. With a
          substantial user base of Indian expats seeking information,
          services, and products that cater to their unique needs, this
          platform offers an unrivaled opportunity for businesses looking
          to make an impact in this niche market.
        </p>
      </div>
    </div>
    <div className="col-md-6">
      <div className="image-box">
        <Image
          src='/uploads/images/partner/abc.jpg'
          alt="Partner with Us"
          width={500} height={500}
          className="img-fluid"
        />
      </div>
    </div>
  </div>
</div>

      </div>
      <section className="section bg-fafafa">
      <div className="partners container">
        <div className="row text-center">
        
        <h2 className="text-center pb-3">
          Why Choose{" "}
          <a href="https://www.globalindiansinfo.com">GlobalIndiansInfo.com</a>
        </h2>
      
          {benefits.map((benefit, index) => (
            <div className="col-sm-12 col-lg-4 col-md-4"  key={index}> 
            <BenefitItem
             
              title={benefit.title}
              description={benefit.description}
              image={benefit.image}
            />
            </div>
          ))}
       
        </div> 
      </div>
      </section>
      <div className="section container my-2">
        <Row>
          <Col md={6} className="text-center feature-col">
            <div className="mission-vision">
              <div className="feature-icon">
              <GiStairsGoal/>
              </div>
              <h3>Our Proposal</h3>
              <p>
                We invite you to consider leveraging the potential of
                GlobalIndiansInfo.com to boost your business's visibility and
                engagement. Our tailored proposal offers you the opportunity to
                choose from a selection of advertising packages designed to meet
                your objectives and budget. Whether you're looking to highlight
                a specific service, showcase your product range, or establish
                your brand presence, our team is committed to working closely
                with you to tailor an approach that aligns with your goals.
              </p>
            </div>
          </Col>
          <Col md={6} className="text-center feature-col">
            <div className="mission-vision">
              <div className="feature-icon">
             <MdOutlineContactPhone/>        
              </div>

              <h3>Take Action</h3>
              <p>
                Your next step to reaching Indian expats and unlocking a world
                of opportunities is as simple as reaching out to us. We are
                excited to share more details about our advertising packages,
                answer your queries, and assist you in embarking on this
                rewarding journey. Kindly reach out to us at {" "}
                <a href= "tel:+447867090363" style={{ color: "green" }}>
                   wa.me/+447867090363  {" "}
                </a>
                or send a mail to  {" "}
                <a href="mailto:info@prabisha.com" style={{ color: "orange" }}>
                  info@prabisha.com {" "}
                </a>
                to initiate the conversation. We look forward to the opportunity
                to partner with you and propel your business's growth on the
                global stage.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

Partner.layout = "other";
export default Partner;
