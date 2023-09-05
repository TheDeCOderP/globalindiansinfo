import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';

function Carousels() {
  const CarouselList = [
    {
      'slug': '/uploads/images/carousel/slide3.jpg',
      
    },
    {
      'slug': '/uploads/images/carousel/slide4.jpg',
      
    },
    {
      'slug': '/uploads/images/carousel/slide6.jpg',
      
    },
    {
      'slug': '/uploads/images/carousel/slide7.jpg',
      
    },
    {
      'slug': '/uploads/images/carousel/slide8.jpg',
      
    },
    {
      'slug': '/uploads/images/carousel/slide9.jpg',
      
    },
    {
      'slug': '/uploads/images/carousel/slide10.jpg',
    },
    {
      'slug': '/uploads/images/carousel/slide11.jpg',
    },
  ];

  return (
    <>
     
      <Carousel className="home_slider" fade>
        {CarouselList.map((item) => (
          <Carousel.Item interval={2000} key={item.slug}>
            <img className="d-block w-100" src={item.slug} alt="First slide" />
            {/* <Carousel.Caption className="carousel_section">
              <h2>
                {item.title} <span className="white">{item.white} </span>
                <span className="green"> {item.green} </span>
              </h2>
              <Link href={item.link}>
                <button className="button carousel_button p-2 hide_on_mobile">Read More</button>
              </Link>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Carousels;
