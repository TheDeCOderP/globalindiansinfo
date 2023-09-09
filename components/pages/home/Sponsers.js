import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sponsors = () => {
  const logos = [
    '/uploads/images/sponsers/image1.png',
    '/uploads/images/sponsers/image2.png',
    '/uploads/images/sponsers/image3.png',
    '/uploads/images/sponsers/image4.png',
    '/uploads/images/sponsers/image5.png',
  ];

  const sponsorWebsites = [
    'https://www.prabisha.com/',
    'https://www.prishatheexplorer.com/',
    'https://www.jaimeprisha.com/',
    'https://www.pratyushkumar.co.uk/',
    'https://bidisharay.com/',
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
  const handleLogoClick = (websiteURL) => {
    window.open(websiteURL, '_blank');
  };

  return (
    <div className="marquee_container">
     <h1 className="text-center">Our <span className="green">Sponsors</span></h1>
      <Slider {...settings}>
        {logos.map((item, index) => (
          <div key={index} className="logo">
          <div key={index} className="logo" onClick={() => handleLogoClick(sponsorWebsites[index])}  style={{ cursor: 'pointer' }}>
            <img src={item} alt={`Logo ${index}`}  className="sponsores_logo"/>
            </div>
          </div>
        ))}
      </Slider>

      
    </div>
  );
};

export default Sponsors;
