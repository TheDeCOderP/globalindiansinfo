import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sponsors = () => {
  const logos = [
    '/uploads/images/sponsers/image1.png',
    '/uploads/images/sponsers/image2.jpg',
    '/uploads/images/sponsers/image3.png',
    '/uploads/images/sponsers/image4.png',
    '/uploads/images/sponsers/image5.png',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Adjust the speed in milliseconds
    autoplay: true,
    autoplaySpeed: 0, // Adjust the autoplay speed in milliseconds
    cssEase: 'linear',
    variableWidth: true,
    centerMode: true,
    arrows: false,
  };

  return (
    <div className="marquee_container">
     <h1 className="text-center">Our <span className="green">Sponsors</span></h1>
      <Slider {...settings}>
        {logos.map((item, index) => (
          <div key={index} className="logo">
            <img src={item} alt={`Logo ${index}`}  className="sponsores_logo"/>
          </div>
        ))}
      </Slider>

      
    </div>
  );
};

export default Sponsors;
