import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';

function Carousels() {
  const CarouselList = [
    {
      'slug': '/uploads/images/carousel/new-slide-1.jpg',
      
    },
    {
      'slug': '/uploads/images/carousel/new-slide-2.jpg',
      
    },
    {
      'slug': '/uploads/images/carousel/new-slide-3.jpg',
      
    },
    {
      'slug': '/uploads/images/carousel/new-slide-4.jpg',
      
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
