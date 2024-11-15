// pages/index.js
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from 'framer-motion';
import HealthNews from '../components/health-wellness-news'

const dishes = [
  {
    title: "Embracing Ayurveda for Holistic Wellness",
    // subheading: "Mumbai's Chaat Delights",
    image: "/uploads/images/health/Ayurveda.jpg",
    description:
      "At the heart of our philosophy is Ayurveda, the ancient Indian system of medicine that dates back thousands of years. Ayurveda emphasizes the balance of mind, body, and spirit, and we strive to integrate its principles into our wellness programs. From personalized dietary recommendations to rejuvenating therapies, our approach is rooted in the time-tested wisdom of Ayurveda.",
  },
  {
    title: "Yoga and Mindfulness for Inner Harmony",
    // subheading: "Beyond Butter Chicken",
    image: "/uploads/images/health/yoga3.jpg",
    description:
      "Discover the transformative power of yoga and mindfulness practices that have been an integral part of Indian culture for centuries. Our expert instructors guide you through a journey of self-discovery, helping you cultivate inner peace, improve flexibility, and build strength. Whether you're a beginner or an experienced practitioner, our classes cater to all levels. ",
  },
  {
    title: "Nutritional Guidance for Vibrant Health",
    // subheading: "The Heartbeat of Indian Cuisine: Spices",
    image: "/uploads/images/health/food.jpg",
    description:
      "Unlock the secrets of Indian cuisine and learn how to make nutritious choices that support your well-being. Our nutrition experts provide guidance on creating a balanced and wholesome diet based on traditional Indian principles. Explore the rich tapestry of flavors and discover how to nourish your body with the right nutrients." ,
  },
  {
    title: "Wellness Retreats to Rejuvenate Your Soul ",
    // subheading: "When East Meets West on the Plate",
    image: "/uploads/images/health/yoga2.jpg",
    description:
      "Join us on transformative wellness retreats that combine the serenity of nature with the wisdom of ancient practices. Whether it's a yoga retreat in the Himalayas or a wellness cruise along the Indian coastline, our curated experiences offer a unique blend of relaxation and rejuvenation.",
  },

 
];

const Health = () => {
  return (
    <>
     <HealthNews/>

    <Container className="mt-4 mb-4">
    
      {dishes.map((dish, dishIndex) => (
        <Row key={dishIndex} className={`justify-content-center ${dishIndex % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div className="card my-3 box-shadow">
              <Image
                src={dish.image}
                alt={dish.title}
                width={800}
                height={350}
                className="card-img-top image"
              />
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div className=" my-3">
              <div className="p-4 pt-5 pb-5 box-shadow">
              
                <h3 className="card-title cardTitle pb-3">{dish.title}</h3>
                <h5 className="card-subtitle mb-2 text-muted">{dish.subheading}</h5>
                <p className="card-text  mt-3">{dish.description}</p>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
    <div className="container pb-5">
  <div className="row  text-center">
    <div className="col-md-6">
      <div >
        <img className="cover aspect-ratio"
          src="/uploads/images/health/support.jpg"
          alt="Partner with Us"
        />
      </div>
      <div className="body text-dark p-2" >
        <h4 className="pt-2">Community and Support</h4>
        <p className="event_para text-center">
          Connect with like-minded individuals on our platform and be a part of a global community that shares a passion for health and wellness. Exchange ideas, seek advice, and celebrate your journey towards a healthier and happier life.
        </p>
      </div>
    </div>

    <div className="col-md-6">
      <div >
        <img className="cover aspect-ratio"
          src="/uploads/images/health/insight.jpg"
          alt="Partner with Us"
          
      />
      </div>
      <div className="body text-dark p-2 ">
        <h4 className="pt-2">Stay Informed with Expert Insights</h4>
        <p className="event_para text-center">
          Explore our blog for articles, interviews, and expert insights on health, wellness, and lifestyle. Stay up-to-date with the latest research, trends, and practices that can enhance your overall well-being.
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Health;
