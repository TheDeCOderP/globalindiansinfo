// pages/index.js
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const dishes = [
  {
    title: "Street Food Extravaganza",
    subheading: "Mumbai's Chaat Delights",
    image: "/uploads/images/dishes/d1.jpg",
    description:
      "Dive into the chaotic yet tantalising world of Mumbai's street food. From the spicy and tangy Pani Puri to the flavorful Bhel Puri, the streets of Mumbai are a carnival of taste. Explore how these iconic snacks have found their way into food trucks and trendy eateries globally, bringing a burst of Indian street flavour to every corner of the world.",
  },
  {
    title: "Curry Chronicles",
    subheading: "Beyond Butter Chicken",
    image: "/uploads/images/dishes/d2.jpg",
    description:
      "While Butter Chicken has earned its place as an Indian classic, our curry exploration goes beyond. Discover the aromatic and diverse curries of India, from the coconut-infused curries of Kerala to the fiery vindaloos of Goa. Explore how these regional treasures have evolved into contemporary dishes in upscale restaurants and become a staple in international cuisine.",
  },
  {
    title: "Spice Odyssey",
    subheading: "The Heartbeat of Indian Cuisine: Spices",
    image: "/uploads/images/dishes/d3.jpg",
    description:
      "Embark on a spice odyssey as we unravel the secrets behind India's spice trade. Learn about the medicinal properties and the culinary magic of spices like cardamom, cumin, and fenugreek. Explore how Indian spices have become global favourites, influencing dishes from Latin America to Southeast Asia.",
  },
  {
    title: "Fusion Fiesta",
    subheading: "When East Meets West on the Plate",
    image: "/uploads/images/dishes/d4.jpg",
    description:
      "Witness the delicious marriage of Indian spices with international ingredients in fusion cuisine. From Indian-inspired tacos to masala-infused pizzas, chefs worldwide are embracing the versatility of Indian flavours, creating a symphony of tastes that transcends cultural boundaries.",
  },

  {
    title: "Sweets Symphony",
    subheading: "Indulge in Indian Desserts",
    image: "/uploads/images/dishes/d5.jpg",
    description:
      "Satisfy your sweet tooth with the heavenly desserts from the Indian subcontinent. Delve into the world of Gulab Jamun, Jalebi, and Rasgulla. Uncover how these sugary delights have become popular not only in Indian households but also as exotic treats on dessert menus globally.",
  },
  {
    title: "Modern Indian Eateries",
    subheading: "Contemporary Twist on Tradition",
    image: "/uploads/images/dishes/d6.jpg",
    description:
      "Explore the rise of modern Indian restaurants that blend traditional flavours with contemporary culinary techniques. From molecular gastronomy to farm-to-table concepts, discover how chefs are reinventing Indian cuisine, making it not just a meal but a culinary experience.",
  },
 
  {
    title: " Cooking Classes and Culinary Tourism",
    subheading: "Learn to Cook Like a Pro",
    image: "/uploads/images/dishes/d7.webp",
    description:
      "Immerse yourself in the art of Indian cooking through culinary classes and food tours. Uncover the nuances of regional cuisines, master the art of spice blending, and create authentic Indian dishes in the comfort of your own kitchen.",
  },
 
];

const Food = () => {
  return (
    <>
     <div className="container-fluid food_section">
        <div className="food_overlay"></div>
     <div class="center-heading">
    <h2>Food</h2>
  
  </div>
       
     </div>

    <Container className="mt-4 mb-4">
    
      {dishes.map((dish, dishIndex) => (
        <Row key={dishIndex} className={`justify-content-center ${dishIndex % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
          <Col xs={12} sm={6} md={6} lg={6}>
            <div className="card my-3 box-shadow">
              <Image
                src={dish.image}
                alt={dish.title}
                width={350}
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
    </>
  );
};

export default Food;
