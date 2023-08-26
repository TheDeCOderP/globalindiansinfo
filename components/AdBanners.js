import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ImageCarousel = () => {
  const images = [
    '/uploads/images/adbanners/web.jpg',
    '/uploads/images/adbanners/dm.png',
    '/uploads/images/adbanners/smm.png',
    '/uploads/images/adbanners/seo.png',
    '/uploads/images/adbanners/video.png',
    '/uploads/images/adbanners/graphic.png',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: (i) => <div className="custom-dot"></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on tablet and mobile view
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
           <a href="https://www.prabisha.com" target="_blank"> <img src={image} alt={`Slide ${index}`} /></a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

// ... SamplePrevArrow and SampleNextArrow components ...
