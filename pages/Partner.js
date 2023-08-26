import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaBullseye, FaTasks, FaGlobe } from "react-icons/fa";
import { Color } from "three";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
/>;

const BenefitItem = ({ title, description, image }) => (
  <div className="benefit-item">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
const Partner = () => {
  const benefits = [
    {
      title: "Targeted Reach",
      description:
        "Reach a highly focused audience of Indian expats actively seeking services and products that align with their preferences and requirements.",
      image:
        "https://www.duboseweb.com//images/sized/19a118e6a498c03d139a248f1a04b376/reachtargetaudiencepillar2.jpg", // Replace with actual image path
    },
    {
      title: "Cultural Alignment",
      description:
        "Connect with your audience on a deeper level by understanding and acknowledging their cultural nuances and preferences. ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNr3WQK0glKtB6w9CbwvDU1JCDTI2vu1A-pfTqfjKsR17oEJD2nGXkRZlipjxsCWa5yM8&usqp=CAU", // Replace with actual image path
    },
    {
      title: "Expanded Brand Presence:",
      description:
        " Elevate your brand visibility on a platform that resonates with the Indian expat community, fostering brand loyalty and recognition.",
      image: "/images/cultural-alignment.jpg", // Replace with actual image path
    },
    {
      title: "Tailored Engagement:",
      description:
        "Tailor your offerings to the specific needs and interests of Indian expats, positioning your business as a reliable and relatable choice.",
      image: "/images/cultural-alignment.jpg", // Replace with actual image path
    },
    {
      title: "Diverse Advertising Formats:",
      description:
        "Choose from a range of advertising formats such as banners, articles, and featured listings to showcase your services and products effectively.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4oitK8Yr19r9LdxwNTumX7As2Y10nAZk5A&usqp=CAU", // Replace with actual image path
    },
    // Add more benefits here
  ];

  return (
    <>
      <div className="container">
        <h2>
          Unlock New Opportunities: Reach Indian Expats with Your Services on
          <a href="https://www.globalindiansinfo.com">GlobalIndiansInfo.com</a>
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
          <a
            href="https://www.globalindiansinfo.com"
            style={{ color: "blue", textDecoration: "none" }}
          >
            GlobalIndiansInfo.com
          </a>
        </p>
      </div>
      <div>
        <div className="partner-container">
          <div className="row">
            <h2>
              About{" "}
              <a
                href="https://www.globalindiansinfo.com"
                style={{
                  color: "orange",
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                  textDecoration: "none",
                }}
              >
                GlobalIndiansInfo.com
              </a>
            </h2>
            <div className="col-md-6">
              <p>
                GlobalIndiansInfo.com stands as a hub that bridges the gap
                between Indian expatriates and their homeland. With a
                substantial user base of Indian expats seeking information,
                services, and products that cater to their unique needs, this
                platform offers an unrivaled opportunity for businesses looking
                to make an impact in this niche market.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRf1s2qKuKWoaErQx09YWsv0ZP14-pbA99JD6ar5g6F_Wc3P-FXsvNvganr1LUrcsEkTg&usqp=CAU"
                alt="Partner with Us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="partner-container">
        <h2>
          Why Choose{" "}
          <a href="https://www.globalindiansinfo.com">GlobalIndiansInfo.com</a>
        </h2>
        <div className="benefits-container">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              title={benefit.title}
              description={benefit.description}
              image={benefit.image}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <Row>
          <Col md={6} className="text-center feature-col">
            <div className="mission-vision">
              <div className="feature-icon">
                <FaBullseye />
              </div>
              <h3>Our Proposal:</h3>
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
                <FaTasks />
              </div>

              <h3>Take Action:</h3>
              <p>
                Your next step to reaching Indian expats and unlocking a world
                of opportunities is as simple as reaching out to us. We are
                excited to share more details about our advertising packages,
                answer your queries, and assist you in embarking on this
                rewarding journey. Kindly reach out to us at
                <a href="tel:+447867090363" style={{ color: "green" }}>
                  wa.me/+447867090363
                </a>
                or send a mail to
                <a href="mailto:info@prabisha.com" style={{ color: "orange" }}>
                  info@prabisha.com
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
