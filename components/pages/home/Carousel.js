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
     <div className="hide_on_big pb-4 text-center">
        <Link href="/list-your-business" className="button ">List Business Now</Link>
      </div>
     
      <Carousel className="home_slider" fade>
        {CarouselList.map((item) => (
          <Carousel.Item interval={2000} key={item.slug}>
            <img className="d-block w-100" src={item.slug} alt="First slide" />
          
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Carousels;
